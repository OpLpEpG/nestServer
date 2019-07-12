import { Injectable, HttpException } from '@nestjs/common';
import ModbusRTU from 'modbus-serial';
import * as SerialPort from 'serialport';
import { SerialPortOptions } from 'modbus-serial/ModbusRTU';
import { EventEmitter } from 'events';
import { MetaNode } from '../../../../types/metanode';
import { ECommands } from '../../../../types/commands';
import { Parser } from '../meta-data-parser/parser';
import { Stream, Readable } from 'stream';
import { buffer } from 'rxjs/operators';
import { StreamCommRam } from './ram.stream.wire';
import { ErrorReadRam } from './ram.stream';
import {
    ITransactionReq, ITransactionResult,
    ErrorTransaction, ITransactionInfoResult, MAX_DATA_LEN, ConnectOptions, IConnection,
} from './connect.type';
import { DevModbus } from './connect.modbus';
import { DevWire } from './connect.wire';
import serialOpt from '../config/com';

// tslint:disable-next-line: no-var-requires
// const ModbusRT = require('modbus-serial');
// tslint:disable-next-line: no-var-requires
// const crc16 = require('modbus-serial/utils/crc16');

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

export interface IConnectReq {
    port?: string;
    modbus?: boolean;
    options?: ConnectOptions;
}

export class ErrorConnectService extends HttpException {
    constructor(response: string) {
        super(response, 400);
    }
}

@Injectable()
export class ConnectService {

    private conn: DevWire | DevModbus;
    private req: IConnectReq = {};

    constructor() {
        // req: IConnectReq) {
        this.req = Object.assign(this.req, serialOpt);
        if (this.req.modbus) {
            this.conn = new DevModbus();
        } else {
            this.conn = new DevWire();
        }
        this.conn.connect(this.req.port, this.req.options);
        console.log(`Create Connection ${this.req}`);
    }
    get path(): string { return this.req.port; }
    get connection(): IConnection { return this.conn; }
    get modbus(): DevModbus {
        if (!this.req.modbus) { throw new ErrorConnectService('создано wire соединение'); }
        return this.conn as DevModbus;
    }
    get wire(): DevWire {
        if (this.req.modbus) { throw new ErrorConnectService('создано modbus соединение'); }
        return this.conn as DevWire;
    }

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
