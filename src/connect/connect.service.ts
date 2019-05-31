import { Injectable } from '@nestjs/common';
import ModbusRTU from 'modbus-serial';
import * as SerialPort from 'serialport';
import { SerialPortOptions } from 'modbus-serial/ModbusRTU';
import { crc16 } from 'modbus-serial/utils/crc16';

// tslint:disable-next-line: no-var-requires
const ModbusRT = require('modbus-serial');

export type ConnectOptions = SerialPort.OpenOptions & SerialPortOptions;
// export type CommPort = ModbusRTU | SerialPort;

export interface IConnection {
    connect: (path: string, options: ConnectOptions) => Promise<IConnection>;
    disConnect: () => Promise<void>;
}

export interface ITransactionArg {
    adr: number;
    command: number;
    expectedLen?: number;
    timout?: number;
    data?: Buffer;
}
export interface ITransactionResult {
    error?: any;
    data?: Buffer;
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
    connect(path: string, options: ConnectOptions): Promise<IConnection> {
        return new Promise((resolve, reject) => {
            options.autoOpen = false;
            this.port = new SerialPort(path, options);
            this.port.open(err => err ? reject(err) : resolve(this));
            this.port.on('data', data => {
                console.log('Data:', data);
            })
        });
    }

    disConnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.port) {
                this.port.removeAllListeners('data');
                this.port.close(err => err ? reject(err) : resolve());
            } else { resolve(); }
        });
    }

    transactionP(arg: ITransactionArg): Promise<ITransactionResult> {
        return new Promise((resolve, reject) => {

            const b = this.formPacket(arg);

            const cb = (error: any, bytesWritten: number): void => {
                if (error) {
                    reject(error);
                } else if (bytesWritten !== b.length) {
                    reject(new Error('bad len write'));
                } else {
                    // set timout
                    // brgin read
                }
            };
            // clear buffer
            this.port.write(b, cb);
        });
    }

    formPacket(arg: ITransactionArg): Buffer {
        let len = 3;
        if (Buffer.isBuffer(arg.data)) {
            len += (arg.data as Buffer).length;
        }
        const b = Buffer.alloc(len);

        // tslint:disable-next-line: no-bitwise
        b.writeUInt8(arg.adr << 4 & arg.command, 0);

        if (Buffer.isBuffer(arg.data)) {
            (arg.data as Buffer).copy(b, 1);
        }
        b.writeUInt16LE(crc16(b.slice(0, -2)), len);
        return b;
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
