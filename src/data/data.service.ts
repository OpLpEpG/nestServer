import { Injectable } from '@nestjs/common';
// import { CommPort } from '../connect/connect.service';
import ModbusRTU from 'modbus-serial';

@Injectable()
export class DataService {
    // constructor(private readonly conn: CommPort) { }

    // transaction(): Promise<{}> {
    //     return (this.conn as ModbusRTU).writeRegister(1, 1);
    // }
}
