
export enum ESpeed {
    S125K = 0x80,
    S500K = 0x40,
    S1M = 0x20,
    S2M = 0x10,
    S4M = 0x08,
    SD = 0x4000,
    USB = 0x8000,
}
export interface ISpeed {
    mask: ESpeed;
    baudRate: number;
    cmdByte: number;
    text: string;
}
const STD_SPEED: ISpeed[] = [
    { mask: 0x80, baudRate: 125000, cmdByte: 0, text: '125K' },
    { mask: 0x40, baudRate: 500000, cmdByte: 1, text: '0.5M' },
    { mask: 0x20, baudRate: 1000000, cmdByte: 2, text: '1M' },
    { mask: 0x10, baudRate: 2250000, cmdByte: 3, text: '2M' },
    { mask: 0x08, baudRate: 4500000, cmdByte: 4, text: '4M' },
];

export class Speed {
    private speed: ISpeed[] = [];
    constructor(private readonly speedword: number) {
        for (const s of STD_SPEED) {
            // tslint:disable-next-line: no-bitwise
            if (s.mask & speedword) { this.speed.push(s); }
        }
    }
    // tslint:disable-next-line: no-bitwise
    get isSD(): boolean { return (this.speedword & ESpeed.SD) !== 0; }
    // tslint:disable-next-line: no-bitwise
    get isUSB(): boolean { return (this.speedword & ESpeed.USB) !== 0; }
    get supports(): ISpeed[] {return this.speed; }
}