import { EStdAttr, STDTP, EMetaType } from './attr';
import { MetaNode, value_t, attrMetaVal_t, MetaRec, MetaValue, isMetaRec, isMetaValue, isMetaUser, MetaUser } from './parser';

// представление данных буфера для отображения
export type attrVal_t = string | number | number[];
export type attr_t = [EStdAttr, attrVal_t];

export interface IViewNode {
    readonly name: string;
    readonly attr?: attr_t[];
}
export interface IDevNode extends IViewNode {
    readonly meta: MetaValue;
    readonly dev: attr_t[];
    readonly clc?: attr_t[];
    findClc?: () => void;
}
export interface IClcNode extends IViewNode {
    readonly clc: attr_t[];
    findClc?: () => void;
}
export interface IRecNode extends IViewNode {
    readonly meta: MetaRec;
    readonly child: IViewNode[];
    findClc?: () => void;
}
// защитники типа
export function isIRecNode(a: IViewNode): a is IRecNode { return (a as IRecNode).child !== undefined; }
export function isIDevNode(a: IViewNode): a is IDevNode { return (a as IDevNode).dev !== undefined; }
export function isIClcNode(a: IViewNode): a is IClcNode { return (a as IDevNode).dev === undefined && (a as IDevNode).clc !== undefined; }
/*
export class ViewNode implements IViewNode {

    constructor(public readonly name: string, public readonly attr?: attr_t[]) { }

    setAttr(attr: attr_t[], item: EStdAttr, data: attrVal_t): void {
        const i = attr.findIndex(el => el[0] === item);
        if (i < 0) {
            attr.push([item, data]);
        } else {
            attr[i] = [item, data];
        }
    }
    getAttr(attr: attr_t[], item: EStdAttr): attrVal_t {
        const i = attr.findIndex(([k, v]) => k === item);
        if (i < 0) {
            throw new Error(`Not find attr ${item}`);
        }
        const [key, val] = attr[i];
        return val;
    }
    attrget(item: EStdAttr): attrVal_t { return this.getAttr(this.attr, item); }
    attrset(item: EStdAttr, data: attrVal_t): void { this.setAttr(this.attr, item, data); }
}
// tslint:disable-next-line: max-classes-per-file
export class ValueNode extends ViewNode {

    public readonly dev?: attr_t[];
    public readonly clc?: attr_t[];

    constructor(public readonly meta: MetaNode, name: string, { attr, dev, clc }: { attr?: attr_t[], dev?: attr_t[], clc?: attr_t[] }) {
        super(name, attr);
        this.dev = dev;
        this.clc = clc;
    }
    static li(m: MetaNode): boolean {
        return STDTP.findIndex(v => v.tip === m.tip) >= 0;
    }
    calc(item: EStdAttr): attrVal_t { return this.getAttr(this.clc, item); }
    calcset(item: EStdAttr, data: attrVal_t): void { this.setAttr(this.clc, item, data); }

    devs(item: EStdAttr): attrVal_t { return this.getAttr(this.dev, item); }
    devset(item: EStdAttr, data: attrVal_t): void { this.setAttr(this.dev, item, data); }
}
// tslint:disable-next-line: max-classes-per-file
export class RecNode extends ViewNode {

    static li(m: MetaNode): boolean {
        return m.tip === EMetaType.varRecord;
    }
}
*/

export class ParseView {

    private $view: IRecNode;
    private $arr: IViewNode[];

    constructor(public readonly root: MetaRec) { }

    private getAttrUser(meta: MetaUser): attr_t {
        return [meta.attr, meta.value];
    }
    private getDevNode(meta: MetaValue): IDevNode {

        let attr: attr_t[] | undefined;
        const dev: attr_t[] = [];

        dev.push([EStdAttr.AT_TIP, meta.tip]);
        dev.push([EStdAttr.AT_INDEX, meta.devIndex]);
        dev.push([EStdAttr.AT_VALUE, 0]);

        if (meta.arrayLength) {
            if (!attr) { attr = []; }
            attr.push([EStdAttr.AT_ARRAY, meta.arrayLength]);
        }
        if (meta.meta) {
            if (!attr) { attr = []; }
            attr.push([EStdAttr.AT_METR, meta.meta]);
        }

        return { name: meta.value as string, meta, attr, dev };
    }
    private getRecNode(meta: MetaRec): IRecNode {

        const child: IViewNode[] = [];
        let attr: attr_t[] | undefined;

        meta.child.forEach(m => {
            if (isMetaRec(m)) {
                child.push(this.getRecNode(m));
            } else if (isMetaValue(m)) {
                child.push(this.getDevNode(m));
            } else if (isMetaUser(m)) {
                if (!attr) { attr = []; }
                attr.push(this.getAttrUser(m));
            } else { throw new Error(`cun,t run ${m.value} at ${m.index} tip ${m.tip} ?`); }
        });

        return { name: meta.value as string, meta, child, attr };
    }
    get view(): IRecNode {
        if (!this.$view) { this.$view = this.getRecNode(this.root); }
        return this.$view;
    }
    toArray(): IViewNode[] {

        if (this.$arr) { return this.$arr; }

        const addcild = (r: IRecNode): void => {
            r.child.forEach(n => {
                this.$arr.push(n);
                if (isIRecNode(n)) { addcild(n); }
            });
        };
        this.$arr.push(this.view);
        addcild(this.view);

        return this.$arr;
    }
    private setAttr(attr: attr_t[], a: attr_t): void {
        const i = attr.findIndex(el => el[0] === a[0]);
        (i < 0) ? attr.push(a) : attr[i] = a;
    }
    updateValue(b: Buffer) {
        this.toArray()
            .filter(n => isIDevNode(n))
            .forEach((n: IDevNode) =>
                this.setAttr(n.dev, [EStdAttr.AT_VALUE, n.meta.getValue(b)]));
    }
}
