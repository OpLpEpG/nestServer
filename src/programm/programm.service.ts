import { Injectable } from '@nestjs/common';
import { IParseBootFile } from '../../../../types/DTOparseBootFileRes';
import { Observable, Subject, from, timer, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class ProgrammService {

    buffer: Buffer;
    data: IParseBootFile;

    s = new Subject<{}>();

    programm(): Observable<any> {

        if (!(this.buffer && this.data)) { throw new Error(`Error not boot file`); }

        this.s.next(1);
        this.s.next(2);
        this.s.next(5);
        this.s.next(3);

        return interval(1000 /* ms */).pipe(take(3));

    }

}
