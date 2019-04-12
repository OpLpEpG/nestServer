import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class MetaDataParserService {

    // parse(b: Buffer): Observable<object> {
    //     return of({ name: 'rrrexcecdfe' });
    // }
    parse(b: Buffer): object {
        return { name: 'rrrexcecdfe',
                 attr: {a1: 'a1', a2: 'a2'},
                arr: [{o1: 'a1'}, {o2: 'o2'}]};
    }
}
