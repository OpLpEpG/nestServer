import { Injectable } from '@nestjs/common';
import { IParseBootFile } from '../../../../types/DTOparseBootFileRes';
import { Observable, Subject, from, timer, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModbusRTU } from 'modbus-serial/ModbusRTU';

@Injectable()
export class ProgrammService {

    buffer: Buffer;
    data: IParseBootFile;
    ftreminate: boolean;

    s = new Subject<{}>();

    serv = new ModbusRTU();

    terminate() {
        this.ftreminate = true;
    }

    programm(): Observable<any> {
        this.ftreminate = false;

        // if (!(this.buffer && this.data)) { throw new Error(`Error not boot file`); }

        this.s.next(1);
        this.s.next(2);
        this.s.next(5);
        this.s.next(3);

        return interval(1000 /* ms */).pipe(take(3));

    }

}
