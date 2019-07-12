import { HttpException } from '@nestjs/common';
import * as SerialPort from 'serialport';
import { SerialPortOptions } from 'modbus-serial/ModbusRTU';
import { MetaNode } from '../../../../types/metanode';

export const MAX_DATA_LEN = 255 - 1 - 2;

export class ErrorTransaction extends HttpException { }

export type ConnectOptions = SerialPort.OpenOptions & SerialPortOptions;

export interface IConnection {
    connect(path: string, options: ConnectOptions): Promise<IConnection>;
    disConnect(): Promise<void>;
    readonly isOpen: boolean;
}

export interface ITransactionReq {
    adr?: number;
    command?: number;
    expectedLen?: number;
    timout?: number;
    data?: Buffer;
}
export interface ITransactionResult {
    req: ITransactionReq;
    error?: string;
    data?: Buffer;
    len?: number;
}
export interface ITransactionInfoResult extends ITransactionResult {
    meta: MetaNode;
}
export interface IworkReq {
    adr: number;
    size: number;
}
// export interface ITurboReq {
//     adr: number;
//     turbo: number;
// }

export interface IReadArray {
    from?: number;
    too?: number;
}

export interface IReadRamReq extends IReadArray {
    endOnEmpty?: boolean;
}

export interface IReadRamReqNTry extends IReadRamReq {
    repeatOnErr?: number;
}

export const defaultReadRamReq: IReadRamReqNTry = { from: 0, endOnEmpty: true, repeatOnErr: 1 };

export interface IBlockReadResult {
    error?: string;
    data?: Buffer;
    len?: number;
}

export interface IReadCommRamReq extends IReadRamReqNTry {
    adr: number;
    turbo?: number;
    highWaterMark?: number;
    timeout?: number;
}
export interface IReadEEPROMReq extends IReadArray {
    adr: number;
}
export interface IWriteEEPROMReq {
    adr: number;
    from?: number;
    data: Buffer;
}
export const defaultReadCommRamReq: IReadCommRamReq = { adr: 0, from: 0, timeout: 2097, repeatOnErr: 3, endOnEmpty: true, highWaterMark: 0x4000 };

export interface IReadSDRamReq extends IReadRamReq {
    path?: string;
}
