import { EStdAttr, ROOTPATH } from '../../../../types/attr';
import { CHIPS } from '../../../../types/CHIPS';
import { STDTP, USRTP } from '../../../../types/STDTP';
import { EMetaType } from '../../../../types/EMetaType';
import { decode } from 'iconv-lite';
import { HttpException, HttpStatus } from '@nestjs/common';
import { MetaValue, getval_t, setval_t, MetaUser,
         attrMetaVal_t, setUserAttr_t, MetaRec,
         MetaNode, isMetaRec } from '../../../../types/metanode';

class ErrorParser extends HttpException { }

export class Parser {

    constructor(private readonly data: Buffer) { }

    private throwLen(idx: number) {
        if (this.data.byteLength <= idx) {
            throw new ErrorParser(`${idx} за границей буфера ${this.data.byteLength}`, HttpStatus.BAD_REQUEST);
        }
    }

    private chekRec(idx: number): boolean {
        return this.data[idx] === EMetaType.varRecord;
    }
    private chekRootRec(name: string): boolean {
        return ROOTPATH.indexOf(name as EStdAttr) !== -1;
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

        if (end < 0) { throw new ErrorParser(`${idx} not end of string`, HttpStatus.BAD_REQUEST); }

        const nameta: string = decode(this.data.slice(idx, end), 'win1251');

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
            this.throwLen(idx);
        }
        const { tip, attr, cname, metalen, devlen, sv, gv } = STDTP[STDTP.findIndex(v => v.tip === this.data[idx])];
        const { str, meta, strlen } = this.parseStr(++idx);
        idx += strlen;
        this.throwLen(idx);

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
            this.throwLen(idx);
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
            this.throwLen(idx);
        }

        return { tip, index, len: idx - index, value, setUserVal: sv, attr };
    }
    private addRec(index: number, devIndex: number): MetaRec {

        const child: MetaNode[] = [];
        let idx = index;
        let devSize = 0;
        const len = this.data.readUInt16LE(++idx);
        idx += 2;
        const { str, meta, strlen } = this.parseStr(idx);
        idx += strlen;
        devIndex = this.chekRootRec(str) ? 0 : devIndex;

        while (len > idx - index) {
            let m: MetaNode;
            if (this.chekRec(idx)) {
                m = this.addRec(idx, devIndex + devSize);
                devSize += (m as MetaRec).devSize;
            } else if (this.chekStd(idx)) {
                m = this.addStd(idx, devIndex + devSize);
                const mul = (m as MetaValue).arrayLength ? (m as MetaValue).arrayLength : 1;
                devSize += (m as MetaValue).devLen * mul;
            } else if (this.chekUser(idx)) {
                m = this.addUser(idx);
            } else {
                throw new ErrorParser(`Parser Error ${this.data[idx]}`, HttpStatus.BAD_REQUEST);
            }
            idx += m.len;
            this.throwLen(idx);
            child.push(m);
        }

        if ((idx - index) !== len) {
            throw new ErrorParser(`Node ${str} at ${index} clc len ${idx - index} != ${len} len`, HttpStatus.BAD_REQUEST);
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
        this.throwLen(from);
        if (!this.chekRec(from)) {
            throw new ErrorParser(`по адресу: [${from}] = ${this.data.readUInt8(from)} не varRecord = ${EMetaType.varRecord}`,
                                    HttpStatus.BAD_REQUEST);
        } else { return this.addRec(from, 0); }
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
        throw new ErrorParser(`Can't find meta data !!! ${e.toString()}`, HttpStatus.BAD_REQUEST);
    }
}
