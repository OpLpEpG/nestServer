import {STDTP, USRTP, EMetaType as EMetaType, EStdAttr} from './attr';
import { TupleTypeAnnotation, switchCase } from '@babel/types';
import { IncomingMessage } from 'http';
import { strict } from 'assert';
import { tryParsePattern } from 'typescript';

// Поддерживаемые данные прибора
// Формат (typ|{var_name{|meta}|0)
// Формат массива (arr=59|L|H|typ|{arr_name|meta}|0)

// Дополнительные атрибуты метаданных прибора
// Формат (typ|n) type const attrname: number = n;
// Формат (typ|nn) type const attrname: number = nn;
// Формат (typ|nnnn) type const attrname: number = nnnn;
// Формат (typ=39|{str}|0) type const attrname: string = str;

export type value_t = string|number;
// представление бинарных метаданных буфера
export interface MetaNode {
    readonly tip: EMetaType;
    readonly index: number;         // смещение в буфере (например: для записи серийного номера (вычисляемый параметр))
    readonly len: number;           // длина в буфере в байтах (вычисляемый параметр или данные record)
    readonly value: value_t;        // имя параметра, или значение для атрибута
}
export interface MetaAttr extends MetaNode {
    setValue?: (value: value_t, data: Buffer) => void; // запись в буфер метаданных
}
export interface MetaRec extends MetaNode {
    readonly meta?: string;         // часть строки метаданных  в формата name|meta
    readonly devSize: number;       // длина в байтах в буфере данных от прибора
    readonly child: MetaAttr[];    // вложенные ноды для nodeRec
}
// представление бинарных метаданных буфера
export interface MetaValue extends MetaNode {
    readonly meta?: string;         // часть строки метаданных  в формата name|meta
    readonly devIndex: number;      // вычисляемый параметр: смещение параметра в буфере при приеме данных от прибора
    readonly devLen: number;        // длина параметра в буфере при приеме данных от прибора
    readonly arrayLength?: number;  // число элементов массива (word) Формат массива (arr=59|L|H|tip|{arr_name|meta}|0)
    setValue?: (value: value_t, data: Buffer) => void;  // запись в буфер при передаче данных прибору
    getValue?: (data: Buffer) => value_t;               // чтение буфера при приеме данных от прибора
}
// защитники типа
export function MetaAttr(a: MetaNode): a is MetaAttr {return (a as MetaRec).child === undefined && (a as MetaValue).devIndex === undefined; }
export function isMetaRec(a: MetaNode): a is MetaRec {return (a as MetaRec).child !== undefined; }
export function isMetaValue(a: MetaNode): a is MetaValue {return (a as MetaValue).devIndex !== undefined; }

export type attr_t = [EStdAttr, value_t];
// представление данных буфера для отображения
export class ViewNode {

    constructor(public readonly meta: MetaNode,
                public readonly name: string,
                public readonly attrs?: attr_t[]) {}

    setAttr(attr: attr_t[], item: EStdAttr, data: value_t): void {
        const i = attr.findIndex(el => el[0] === item);
        if (i < 0) { attr.push([item, data]); } else { attr[i] = [item, data]; }
    }
    getAttr(attr: attr_t[], item: EStdAttr): value_t {
        const i = attr.findIndex(([k, v]) => k === item);
        if (i < 0) { throw new Error(`Not find attr ${item}`); }
        const [key, val] = attr[i];
        return val;
    }
    attr(item: EStdAttr): value_t { return this.getAttr(this.attrs, item); }
    attrset(item: EStdAttr, data: value_t): void { this.setAttr(this.attrs, item, data); }
}

// tslint:disable-next-line: max-classes-per-file
export class ValueNode extends ViewNode {

    public readonly dev?: attr_t[];
    public readonly clc?: attr_t[];

    constructor(meta: MetaNode, name: string, {attr, dev, clc}: {attr?: attr_t[], dev?: attr_t[], clc?: attr_t[]}) {
        super(meta, name, attr);
        this.dev = dev;
        this.clc = clc;
    }
    static li(m: MetaNode): boolean {
        return STDTP.findIndex(v => v.tip === m.tip) >= 0;
    }
    calc(item: EStdAttr): value_t { return this.getAttr(this.clc, item); }
    calcset(item: EStdAttr, data: value_t): void { this.setAttr(this.clc, item, data); }

    devs(item: EStdAttr): value_t { return this.getAttr(this.dev, item); }
    devset(item: EStdAttr, data: value_t): void { this.setAttr(this.dev, item, data); }
}

// tslint:disable-next-line: max-classes-per-file
export class RecNode extends ViewNode {

    static li(m: MetaNode): boolean {
        return m.tip === EMetaType.varRecord;
    }
}

// tslint:disable-next-line: max-classes-per-file
export class Parser {

    constructor(private readonly data: Buffer) {}

    private nodes: MetaNode|undefined = undefined;

    private chekRec(idx: number): boolean {
        return this.data[idx] === EMetaType.varRecord;
    }
    private chekStd(idx: number): boolean {
        if (this.data[idx] === EMetaType.var_array) {return true; }
        return STDTP.findIndex(v => v.tip === this.data[idx]) >= 0;
    }
    private chekUser(idx: number): boolean {
        return USRTP.findIndex(v => v.tip === this.data[idx]) >= 0;
    }

    private parseStr(idx: number): {str: string, meta: string|undefined, strlen: number} {

        const end = this.data.indexOf(0, idx);

        if (end < 0) {throw new Error(`${idx} not end of string`); }

        const nameta: string = this.data.toString('ascii', idx, end);
        // const mt = nameta.indexOf('|');

        // let str: string;
        // let meta: string|undefined;

        // if (mt < 0) { str = nameta;
        // } else { [str, meta] = nameta.split('|'); }

        const [str, meta] = nameta.split('|');

        return {str, meta, strlen: end - idx };
    }

    private addStd(index: number, devidx: number): MetaValue {
        let idx = index;
        let arrayLength: number;

        if (this.data[idx] === EMetaType.var_array) {
            arrayLength = this.data.readUInt16LE(++idx);
            idx += 2;
        }
        const { tip, attr, cname,  metalen, devlen} = STDTP[STDTP.findIndex(v => v.tip === this.data[idx])];
        const {str, meta, strlen} = this.parseStr(++idx);
        idx += strlen;

        return {tip, index, len: idx - index, value: str, meta, devIndex: devidx, devLen: devlen, arrayLength};
    }
    private addUser(index: number): MetaNode {
        let idx = index;
        let value: value_t;
        const { tip, attr, cname,  metalen} = USRTP[USRTP.findIndex(v => v.tip === this.data[idx])];
        if (metalen === 'string') {
            const {str, meta, strlen} = this.parseStr(++idx);
            idx += strlen;
            value = str;
        } else {
            switch (metalen) {
                    case 1:
                        value = this.data[++idx];
                        break;
                    case 2:
                        value = this.data.readUInt16LE(++idx);
                        break;
                    case 4:
                        value = this.data.readUInt32LE(++idx);
                        break;
                }
            idx += metalen as number;
        }

        return {tip, index, len: idx - index, value};
    }

    private addRec(index: number, devIndex: number): MetaRec {

        const child: MetaNode[] = [];
        let idx = index;
        let devidx = devIndex;
        const len = this.data.readUInt16LE(++idx);
        idx += 2;
        const {str, meta, strlen} = this.parseStr(idx);
        idx += strlen;

        while (len > idx - index) {
            let m: MetaNode;
            if (this.chekRec(idx)) {
                m = this.addRec(idx, devidx);
            } else if (this.chekStd(idx)) {
                m = this.addStd(idx, devidx);
                const mul = (m as MetaValue).arrayLength ? (m as MetaValue).arrayLength : 1;
                devidx += (m as MetaValue).devLen * mul;
            } else if (this.chekUser(idx)) {
                m = this.addUser(idx);
            } else {
                throw new Error(`Parser Error ${this.data[idx]}`);
            }
            idx += m.len;
            child.push(m);
        }

        if ((idx - index) !== len) {
            throw new Error(`Node ${str} at ${index} clc len ${idx - index} != ${len} len`);
        } else {return {tip: EMetaType.varRecord,
                        index,
                        len,
                        value: str,
                        meta,
                        child }; }
        }

    private parse(from: number = 0): MetaNode {
        if (! this.chekRec(from)) {
            throw new Error(`по адресу: [${from}] = ${this.data.readUInt8(from)} не varRecord = ${EMetaType.varRecord}`);
        } else { return this.addRec(from); }
    }

    get entity(): MetaNode {

        if (!this.nodes) { this.nodes = this.parse(); }
        return this.nodes;
        }
}
