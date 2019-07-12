import { EventEmitter } from 'events';
import { ECommands } from '../../../../types/commands';
import { Parser } from '../meta-data-parser/parser';
import { Readable } from 'stream';
import { StreamCommRam } from './ram.stream.wire';
import { ErrorReadRam } from './ram.stream';
import {
    IConnection, ConnectOptions, ITransactionReq, ITransactionResult,
    ErrorTransaction, ITransactionInfoResult, MAX_DATA_LEN, IReadCommRamReq, IworkReq, IReadEEPROMReq, IWriteEEPROMReq,
} from './connect.type';
import * as SerialPort from 'serialport';
import { reduce } from 'rxjs/operators';
// tslint:disable-next-line: no-var-requires
const crc16 = require('modbus-serial/utils/crc16');

interface INextTransaction {
    req: ITransactionReq;
    resolve(value?: ITransactionResult | PromiseLike<ITransactionResult>): void;
    reject(reason?: any): void;
}

class EClearQeue extends ErrorTransaction {
    constructor() {
        super('Очистка очереди', 500);
    }
}

export class DevWire implements IConnection {
    private qeue: INextTransaction[] = [];
    private qeueClearResolve: any;
    private port: SerialPort;
    private buffer: Buffer;
    private evData: EventEmitter;
    constructor() {
        this.evData = new EventEmitter();
        this.buffer = Buffer.alloc(0);
    }
    connect(path: string, options: ConnectOptions): Promise<IConnection> {
        return new Promise((resolve, reject) => {
            options.autoOpen = false;
            this.port = new SerialPort(path, options);
            this.port.open(err => {
                if (err) {
                    reject(err);
                } else {
                    this.port.on('data', data => {
                        this.buffer = Buffer.concat([this.buffer, data]);
                        this.evData.emit('data', this.buffer);
                        // console.log('Data:', data);
                    });
                    resolve(this);
                }
            });
        });
    }
    disConnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.port) {
                this.evData.removeAllListeners();
                this.port.removeAllListeners('data');
                this.buffer = Buffer.alloc(0);
                this.port.close(err => err ? reject(err) : resolve());
            } else {
                resolve();
            }
        });
    }
    get isOpen(): boolean {
        return this.port.isOpen;
    }
    clearQeue(): Promise<void> {
        return new Promise(resolve => {
            if (this.qeue.length === 0) {
                resolve();
            } else {
                if (this.qeue.length > 1) {
                    const err = new EClearQeue();
                    while (this.qeue.length > 1) { this.qeue.pop().reject(err); }
                }
                this.qeueClearResolve = resolve;
            }
        });
    }

    transactionP(req: ITransactionReq): Promise<ITransactionResult> {

        return new Promise((resolve, reject) => {
            const run = (nxt: INextTransaction) => {

                const needFormPacket = (nxt.req.adr != null) && (nxt.req.command != null);
                const b = needFormPacket ? this.formPacket(nxt.req) : nxt.req.data;
                const ac = b.readUInt8(0);
                if (!needFormPacket) {
                    // tslint:disable-next-line: no-bitwise
                    nxt.req.adr = ac >>> 4;
                    // tslint:disable-next-line: no-bitwise
                    nxt.req.command = ac & 0x0F;
                }
                let timOut: NodeJS.Timeout;
                let dataCount = 0;
                let timOutFired = false;
                const timout = nxt.req.timout || 2000;
                const cbWrite = (error: any, bytesWritten: number): void => {
                    if (error) {
                        nxt.reject(error);
                        next();
                        // } else if (bytesWritten !== b.length) {
                        //     nxt.reject(new Error('bad len write'));
                        //     next();
                    } else {
                        timOut = setTimeout(() => {
                            timOutFired = true;
                            this.evData.off('data', cbRead);
                            clearTimeout(timOut);
                            if (dataCount === 0 && !nxt.req.expectedLen) {
                                nxt.resolve({ req: nxt.req, error: 'empty' });
                            } else {
                                nxt.reject(new ErrorTransaction(`adr: ${nxt.req.adr} command: ${nxt.req.command} timout ${timOut},
                                                         data answer length: ${dataCount} expected: ${nxt.req.expectedLen}`, 500));
                            }
                            next();
                        }, timout);
                    }
                };
                const cbRead = (d: Buffer): void => {
                    if (timOutFired) {
                        return;
                    }
                    for (let i = 0; i < d.length - 3; i++) {
                        dataCount = d.length;
                        const last = dataCount - i;
                        if (nxt.req.expectedLen && last < nxt.req.expectedLen) {
                            return;
                        }
                        const n = nxt.req.expectedLen || last;
                        if (d.readUInt8(i) === ac) {
                            const pk = d.slice(i, n);
                            if (crc16(pk) === 0) {
                                this.evData.off('data', cbRead);
                                clearTimeout(timOut);
                                nxt.resolve({ req: nxt.req, data: needFormPacket ? pk.slice(1, -2) : pk });
                                next();
                            }
                        }
                    }
                };
                this.buffer = Buffer.alloc(0);
                this.evData.on('data', cbRead);
                this.port.write(b, cbWrite);
            };
            const next = () => {
                this.qeue.shift();
                if (this.qeueClearResolve) {
                    while (this.qeue.length > 0) { this.qeue.pop().reject(new EClearQeue()); }
                    this.qeueClearResolve();
                    this.qeueClearResolve = null;
                } else if (this.qeue.length > 0) {
                    run(this.qeue[0]);
                }
            };

            if (this.qeueClearResolve) {
                reject(new EClearQeue());
            } else {
                this.qeue.push({ req, resolve, reject });
                console.log(`reg: ${req} len ${this.qeue.length} `);
                if (this.qeue.length === 1) {
                    run(this.qeue[0]);
                }
            }
        });
    }

    formPacket(req: ITransactionReq): Buffer {
        let len = 3;
        if (Buffer.isBuffer(req.data)) {
            len += (req.data as Buffer).length;
        }
        const b = Buffer.allocUnsafe(len);
        // tslint:disable-next-line: no-bitwise
        b.writeUInt8(req.adr << 4 | req.command, 0);
        if (Buffer.isBuffer(req.data)) {
            (req.data as Buffer).copy(b, 1);
        }
        b.writeUInt16LE(crc16(b.slice(0, -2)), len - 2);
        return b;
    }
    async info(adr: number): Promise<ITransactionInfoResult> {
        const req: ITransactionReq = { adr, command: ECommands.CMD_INFO, data: Buffer.from([3]) };
        const r = await this.transactionP(req);
        let len = r.data.readUInt16LE(1);
        let b = Buffer.alloc(0);
        let from = 0;
        console.log(`len: ${len}`);
        while (len) {
            const n = (len > MAX_DATA_LEN) ? MAX_DATA_LEN : len;
            const data = Buffer.allocUnsafe(3);
            data.writeUInt16LE(from, 0);
            data.writeUInt8(n, 2);
            const ri = await this.transactionP({ adr, command: ECommands.CMD_INFO, data });
            b = Buffer.concat([b, ri.data]);
            console.log(`--part : ${from} n: ${n}`);
            from += n;
            len -= n;
            console.log(`--end : ${from}`);
        }
        const meta = new Parser(b).parse();
        return { req, meta, data: b };
    }
    work({ adr, size }: IworkReq): Promise<ITransactionResult> {
        const data = Buffer.alloc(2);
        data.writeUInt16LE(size, 0);
        return this.transactionP({ adr, command: ECommands.CMD_WORK, data });
    }
    turbo(turbo: number): Promise<ITransactionResult> {
        return this.transactionP({ adr: 0x0F, command: ECommands.CMD_TURBO, timout: 100, data: Buffer.from([turbo]), expectedLen: 0 });
    }
    async readRam(req: IReadCommRamReq): Promise<Readable> {
        if (req.adr === 0) {
            throw new ErrorReadRam(['адрес 0 пока не поддерживается']);
        }
        await this.clearQeue();
        if (req.turbo) {
            await this.turbo(req.turbo);
        }
        return new StreamCommRam(req, this);
    }
    delay(delay: number): Promise<ITransactionResult> {
        const data = Buffer.allocUnsafe(4);
        data.writeUInt32LE(delay, 0);
        return this.transactionP({ adr: 0x0F, command: ECommands.CMD_TIME_SYNC, timout: 100, data, expectedLen: 0 });
    }
    async readEEPROM(req: IReadEEPROMReq): Promise<ITransactionResult> {
        const data = Buffer.allocUnsafe(2 + 1);
        let b = Buffer.alloc(0);
        let from = req.from || 0;
        let len = req.too || MAX_DATA_LEN;
        const rq: ITransactionReq = { adr: req.adr, command: ECommands.CMD_READ_EE, data };
        while (len) {
            const n = (len > MAX_DATA_LEN) ? MAX_DATA_LEN : len;
            data.writeUInt16LE(from, 0);
            data.writeUInt8(n, 2);
            const ri = await this.transactionP(rq);
            b = Buffer.concat([b, ri.data]);
            console.log(`--part : ${from} n: ${n}`);
            from += n;
            len -= n;
            console.log(`--end : ${from}`);
        }
        return { req: req as ITransactionReq, data: b };
    }
    async writeEEPROM(req: IWriteEEPROMReq): Promise<ITransactionResult> {
        let from = req.from || 0;
        let len = req.data.length;
        while (len) {
            const n = (len > MAX_DATA_LEN - 2) ? MAX_DATA_LEN - 2 : len;
            const data = Buffer.allocUnsafe(n + 2);
            data.writeUInt16LE(from, 0);
            req.data.copy(data, 2, from, n);
            const ri = await this.transactionP({ adr: req.adr, command: ECommands.CMD_WRITE_EE, data });
            console.log(`--part : ${from} n: ${n}`);
            from += n;
            len -= n;
            console.log(`--end : ${from}`);
        }
        return { req: req as ITransactionReq };
    }
}
