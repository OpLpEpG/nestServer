import { IConnection, ConnectOptions } from './connect.type';
import ModbusRTU from 'modbus-serial';
// tslint:disable-next-line: no-var-requires
const ModbusRT = require('modbus-serial');

export type Modbus = ModbusRTU & IConnection;

export class DevModbus extends ModbusRT implements IConnection {
    constructor() {
        super();
    }
    connect(path: string, options: ConnectOptions): Promise<this> {
        return new Promise((resolve, reject) => { this.connectRTU(path, options).then(() => resolve(this), reject); });
    }
    disConnect(): Promise<void> {
        return new Promise(resolve => this.close(() => resolve()));
    }
    get isOpen(): boolean {
        return this._port.isOpen;
    }
    static Create(): Modbus {
        return new DevModbus() as unknown as Modbus;
    }
}
