import { Injectable, Module, Global, HttpException, HttpStatus, Scope } from '@nestjs/common';
import { IParseBootFile } from '../../../../types/DTOparseBootFileRes';
import { Observable, Subject, from, timer, interval, of, defer, concat } from 'rxjs';
import { take } from 'rxjs/operators';
import com from '../config/com';
import { Configurable, ConfigParam } from 'nestjs-config';
// import ModbusRTU, * as Modbus from 'modbus-serial';
import { SerialPortOptions } from 'modbus-serial/ModbusRTU';
import { async } from 'rxjs/internal/scheduler/async';
import { ConnectService } from '../connect/connect.service';

class ErrorProgramm extends HttpException { }

@Injectable()
export class ProgrammService {

    buffer: Buffer;
    data: IParseBootFile;
    ftreminate: boolean;
    ind = 1;

    constructor(private serv: ConnectService) {
        console.log('com new ' + this.ind++);
    }

    terminate() {
        this.ftreminate = true;
    }

    @Configurable()
    programm(comName: string, @ConfigParam('com.baudRate', 115200) baud?: {}): Observable<any> {

        // this.serv.connectRTU(comName, baud).then(()=>{

        // Observable connect
        // Observable test data
        // Observable goto boot
        // Observable run programm
        // Observable verify programm

        console.log(com, comName, baud);

        this.ftreminate = false;

        // if (!(this.buffer && this.data)) { throw new Error(`Error not boot file`); }

        const f = defer(() => this.serv.connection.connect(comName, com.options));

        try {
            const res = concat(f, interval(1000 /* ms */).pipe(take(3)));
            return res;
        } catch (error) {
            return of(new ErrorProgramm(`Ошибка порта ${error.message}`, HttpStatus.BAD_REQUEST));
        }

    }

}
