import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Parser, MetaRec } from '../parser';
import { ParseView, IRecNode } from '../ViewNode';

@Injectable()
export class MetaDataParserService {

    // parse(b: Buffer): Observable<object> {
        // return { name: 'rrrexcecdfe',
        //          attr: {a1: 'a1', a2: 'a2'},
        //         arr: [{o1: 'a1'}, {o2: 'o2'}]};
    // }
    public lastView: IRecNode;

    parseBootFile(b: Buffer): object {
        this.lastView = new ParseView(new Parser(b).parseBoot() as MetaRec).view;
        return this.lastView;
    }
}
