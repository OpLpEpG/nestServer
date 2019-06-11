import { Injectable, HttpException } from '@nestjs/common';
import ModbusRTU from 'modbus-serial';
import * as SerialPort from 'serialport';
import { SerialPortOptions } from 'modbus-serial/ModbusRTU';
import { EventEmitter } from 'events';
import { MetaNode } from '../../../../types/metanode';
import { ECommands } from '../../../../types/commands';
import { Parser } from '../meta-data-parser/parser';

// tslint:disable-next-line: no-var-requires
const ModbusRT = require('modbus-serial');
// tslint:disable-next-line: no-var-requires
const crc16 = require('modbus-serial/utils/crc16');


export const MAX_DATA_LEN = 255 - 1 - 2;

class ErrorTransaction extends HttpException { }

export type ConnectOptions = SerialPort.OpenOptions & SerialPortOptions;
// export type CommPort = ModbusRTU | SerialPort;

export interface IConnection {
    connect: (path: string, options: ConnectOptions) => Promise<IConnection>;
    disConnect: () => Promise<void>;
}

export interface ITransactionReq {
    adr: number;
    command: number;
    expectedLen?: number;
    timout?: number;
    data?: Buffer;
}
export interface ITransactionResult {
    req: ITransactionReq;
    error?: string;
    data?: Buffer;
}
export interface ITransactionInfoResult extends ITransactionResult {
    meta: MetaNode;
}

export class DevModbus extends ModbusRT implements IConnection {

    constructor() {
        super();

    }

    connect(path: string, options: ConnectOptions): Promise<this> {
        return new Promise((resolve, reject) => { this.connectRTU(path, options).then(() => resolve(this), reject); });
    }
    disConnect(): Promise<void> {
        return new Promise(resolve => { this.close(() => resolve()); });
    }
}

export class DevDev implements IConnection {

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
            } else { resolve(); }
        });
    }

    transactionP(req: ITransactionReq): Promise<ITransactionResult> {

        // tslint:disable-next-line: no-bitwise

        return new Promise((resolve, reject) => {

            const b = this.formPacket(req);
            const ac = b.readUInt8(0);
            let timOut: NodeJS.Timeout;
            let dataCount = 0;
            let timOutFired = false;
            const timout = req.timout || 2000;

            const cbWrite = (error: any, bytesWritten: number): void => {
                if (error) {
                    reject(error);
                    // } else if (bytesWritten !== b.length) {
                    //     reject(new Error('bad len write'));
                } else {
                    timOut = setTimeout(() => {
                        timOutFired = true;
                        this.evData.off('data', cbRead);
                        clearTimeout(timOut);
                        if (dataCount === 0 && !req.expectedLen) {
                            resolve({ req, error: 'empty' });
                        } else {
                            reject(new ErrorTransaction(`adr: ${req.adr} command: ${req.command} timout ${timOut},
                                                         data answer length: ${dataCount} expected: ${req.expectedLen}`, 500));
                        }
                        //  timOutFired = false;
                    }, timout);
                }
            };

            const cbRead = (d: Buffer): void => {

                if (timOutFired) { return; }

                for (let i = 0; i < d.length - 3; i++) {

                    dataCount = d.length;

                    const last = dataCount - i;

                    if (req.expectedLen && last < req.expectedLen) { return; }

                    const n = req.expectedLen || last;

                    if (d.readUInt8(i) === ac) {

                        const pk = d.slice(i, n);

                        if (crc16(pk) === 0) {

                            this.evData.off('data', cbRead);
                            clearTimeout(timOut);
                            resolve({ req, data: pk.slice(1, -2) });
                        }
                    }
                }
            };

            this.buffer = Buffer.alloc(0);
            this.evData.on('data', cbRead);
            this.port.write(b, cbWrite);
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
    async work({ adr, size }: { adr: number; size: number; }): Promise<ITransactionResult> {
        const data = Buffer.alloc(2);
        data.writeUInt16LE(size, 0);
        return this.transactionP({ adr, command: ECommands.CMD_WORK, data });
    }
}

// // Options Type Defs
// interface OpenOptions { // serialPort
// 	autoOpen?: boolean;
// 	baudRate?: 115200|57600|38400|19200|9600|4800|2400|1800|1200|600|300|200|150|134|110|75|50|number;
// 	dataBits?: 8|7|6|5;
// 	highWaterMark?: number;
// 	lock?: boolean;
// 	stopBits?: 1|2;
// 	parity?: 'none'|'even'|'mark'|'odd'|'space';
// 	rtscts?: boolean;
// 	xon?: boolean;
// 	xoff?: boolean;
// 	xany?: boolean;
// 	binding?: BaseBinding;
// 	bindingOptions?: {
// 		vmin?: number;
// 		vtime?: number;
// 	};
// }

// export interface SerialPortOptions { modb
//     baudRate?: number;
//     dataBits?: number;
//     stopBits?: number;
//     parity?: 'none' | 'even' | 'mark' | 'odd' | 'space';
//     rtscts?: boolean;
//     xon?: boolean;
//     xoff?: boolean;
//     xany?: boolean;
//     flowControl?: boolean | Array<string>;
//     bufferSize?: number;
//     parser?: any;
//     platformOptions?: SerialPortUnixPlatformOptions;
//   }

@Injectable()
export class ConnectService {

    // options: ConnectOptions;
    // connection: CommPort;

    // constructor(private readonly modbus: boolean = true) { }

    // connectSerial(path: string, options: ConnectOptions): Promise<SerialPort> {
    //     return new Promise((resolve, reject) => {
    //         //                                  autoOpen = true !
    //         this.connection = new SerialPort(path, options, (err) => err ? reject(err) : resolve(this.connection as SerialPort));
    //     });
    // }
    // connectRTU(path: string, options: ConnectOptions): Promise<ModbusRTU> {
    //     return new Promise((resolve, reject) => {
    //         this.connection = new (Modbus as any)();
    //         (this.connection as ModbusRTU).connectRTU(path, options).then(() => resolve(this.connection as ModbusRTU), reject);
    //     });
    // }

    // connect(path: string, options: ConnectOptions): Promise<CommPort> {
    //     if (this.modbus) {
    //         return this.connectRTU(path, options);
    //     } else {
    //         return this.connectSerial(path, options);
    //     }
    // }

    // disConnect(): Promise<void> {
    //     return new Promise((resolve, reject) => this.connection.close(err => err ? reject(err) : resolve()));
    // }
}
