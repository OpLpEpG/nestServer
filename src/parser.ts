import { STDTP, USRTP, EMetaType, EStdAttr, CHIPS } from './attr';

// Поддерживаемые данные прибора
// Формат (typ|{var_name{|meta}|0)
// Формат массива (arr=59|L|H|typ|{arr_name|meta}|0)

// Дополнительные атрибуты метаданных прибора
// Формат (typ|n) type const attrname: number = n;
// Формат (typ|nn) type const attrname: number = nn;
// Формат (typ|nnnn) type const attrname: number = nnnn;
// Формат (typ=39|{str}|0) type const attrname: string = str;

export type attrMetaVal_t = string | number;
export type setUserAttr_t = (value: attrMetaVal_t, data: Buffer) => void;  // запись в буфер
export type value_t = number | number[];
export type setval_t = (value: value_t, data: Buffer) => void;  // запись в буфер
export type getval_t = (data: Buffer) => value_t;               // чтение буфера

// представление бинарных метаданных буфера
export interface MetaNode {
    readonly tip: EMetaType;
    readonly index: number;         // смещение в буфере (например: для записи серийного номера (вычисляемый параметр))
    readonly len: number;           // длина в буфере в байтах (вычисляемый параметр или данные record)
    readonly value: attrMetaVal_t;        // имя параметра, или значение для атрибута
}
export interface MetaUser extends MetaNode {
    readonly attr: EStdAttr;
    setUserVal?: setUserAttr_t; // запись в буфер метаданных
}
export interface MetaRec extends MetaNode {
    readonly meta?: string;         // часть строки метаданных  в формата name|meta
    readonly devSize: number;       // длина в байтах в буфере данных от прибора
    readonly child: MetaNode[];    // вложенные ноды для nodeRec
}
// представление бинарных метаданных буфера
export interface MetaValue extends MetaNode {
    readonly meta?: string;         // часть строки метаданных  в формата name|meta
    readonly devIndex: number;      // вычисляемый параметр: смещение параметра в буфере при приеме данных от прибора
    readonly devLen: number;        // длина параметра в буфере при приеме данных от прибора
    readonly arrayLength?: number;  // число элементов массива (параметрob) (word) Формат массива (arr=59|L|H|tip|{arr_name|meta}|0)
    getValue: getval_t;  // чтение буфера при приеме данных от прибора
    setValue?: setval_t;  // запись в буфер при передаче данных прибору
}
// защитники типа
export function isMetaUser(a: MetaNode): a is MetaUser { return (a as MetaUser).attr !== undefined; }
export function isMetaRec(a: MetaNode): a is MetaRec { return (a as MetaRec).child !== undefined; }
export function isMetaValue(a: MetaNode): a is MetaValue { return (a as MetaValue).devIndex !== undefined; }

class ErrorParser extends Error { }

export class Parser {

    constructor(private readonly data: Buffer) { }

    private chekRec(idx: number): boolean {
        return this.data[idx] === EMetaType.varRecord;
    }
    private chekStd(idx: number): boolean {
        if (this.data[idx] === EMetaType.var_array) { return true; }
        return STDTP.findIndex(v => v.tip === this.data[idx]) >= 0;
    }
    private chekUser(idx: number): boolean {
        return USRTP.findIndex(v => v.tip === this.data[idx]) >= 0;
    }

    private parseStr(idx: number): { str: string, meta: string | undefined, strlen: number } {

        const end = this.data.indexOf(0, idx);

        if (end < 0) { throw new ErrorParser(`${idx} not end of string`); }

        const nameta: string = this.data.toString('latin1', idx, end);
        // const mt = nameta.indexOf('|');

        // let str: string;
        // let meta: string|undefined;

        // if (mt < 0) { str = nameta;
        // } else { [str, meta] = nameta.split('|'); }

        const [str, meta] = nameta.split('|');

        return { str, meta, strlen: end - idx + 1 };
    }

    private addStd(index: number, devidx: number): MetaValue {
        let idx = index;
        let arrayLength: number;
        let getValue: getval_t;
        let setValue: setval_t;

        if (this.data[idx] === EMetaType.var_array) {
            arrayLength = this.data.readUInt16LE(++idx);
            idx += 2;
        }
        const { tip, attr, cname, metalen, devlen, sv, gv } = STDTP[STDTP.findIndex(v => v.tip === this.data[idx])];
        const { str, meta, strlen } = this.parseStr(++idx);
        idx += strlen;

        if (arrayLength) {
            getValue = b => {
                const res: number[] = [];
                for (let i = 0; i < arrayLength; i++) {
                    res.push(gv(b, devidx + i * devlen));
                }
                return res;
            };
            setValue = (v, b) => {
                for (let i = 0; i < arrayLength; i++) {
                    sv(v[i], b, devidx + i * devlen);
                }
            };
        } else {
            getValue = b => gv(b, devidx);
            setValue = (v, b) => sv(v as number, b, devidx);
        }

        return { tip, index, len: idx - index, value: str, meta, devIndex: devidx, devLen: devlen, arrayLength, getValue, setValue };
    }
    private addUser(index: number): MetaUser {
        let idx = index;
        let value: attrMetaVal_t;
        let sv: setUserAttr_t;

        const { tip, attr, cname, metalen } = USRTP[USRTP.findIndex(v => v.tip === this.data[idx])];
        if (metalen === 'string') {
            const { str, meta, strlen } = this.parseStr(++idx);
            idx += strlen;
            value = str;
        } else {
            switch (metalen) {
                case 1:
                    value = this.data[++idx];
                    sv = (vle, dta) => dta[idx] = vle as number;
                    break;
                case 2:
                    value = this.data.readUInt16LE(++idx);
                    sv = (vle, dta) => dta.writeUInt16LE(idx, vle as number);
                    break;
                case 4:
                    value = this.data.readUInt32LE(++idx);
                    sv = (vle, dta) => dta.writeUInt32LE(idx, vle as number);
                    break;
            }
            idx += metalen as number;
        }

        return { tip, index, len: idx - index, value, setUserVal: sv, attr };
    }
    private addRec(index: number): MetaRec {

        const child: MetaNode[] = [];
        let idx = index;
        let devSize = 0;
        const len = this.data.readUInt16LE(++idx);
        idx += 2;
        const { str, meta, strlen } = this.parseStr(idx);
        idx += strlen;

        while (len > idx - index) {
            let m: MetaNode;
            if (this.chekRec(idx)) {
                m = this.addRec(idx);
                devSize += (m as MetaRec).devSize;
            } else if (this.chekStd(idx)) {
                m = this.addStd(idx, devSize);
                const mul = (m as MetaValue).arrayLength ? (m as MetaValue).arrayLength : 1;
                devSize += (m as MetaValue).devLen * mul;
            } else if (this.chekUser(idx)) {
                m = this.addUser(idx);
            } else {
                throw new ErrorParser(`Parser Error ${this.data[idx]}`);
            }
            idx += m.len;
            child.push(m);
        }

        if ((idx - index) !== len) {
            throw new ErrorParser(`Node ${str} at ${index} clc len ${idx - index} != ${len} len`);
        } else {
            return {
                tip: EMetaType.varRecord,
                index,
                len,
                value: str,
                meta,
                devSize,
                child,
            };
        }
    }

    parse(from: number = 0): MetaNode {
        if (!this.chekRec(from)) {
            throw new ErrorParser(`по адресу: [${from}] = ${this.data.readUInt8(from)} не varRecord = ${EMetaType.varRecord}`);
        } else { return this.addRec(from); }
    }
    toJson(root: MetaRec): any {
        // return {root.value, root.devSize};
        return root.value;

    }
    static toArray(root: MetaRec): MetaNode[] {

        const res: MetaNode[] = [];
        const addcild = (r: MetaRec): void => {
            r.child.forEach(n => {
                res.push(n);
                if (isMetaRec(n)) { addcild(n); }
            });
        };

        res.push(root);
        addcild(root);

        return res;
    }
    parseBoot(): MetaNode {

        const e: string[] = [];

        for (const c of CHIPS) {
            try {
                return this.parse(c.meta);
            } catch (error) {

                if (error instanceof ErrorParser) {
                    e.push(error.message);
                } else {
                    throw error;
                }
            }
        }
        throw new ErrorParser( `Can't find meta data !!! ${e.toString()}`);
    }
}
