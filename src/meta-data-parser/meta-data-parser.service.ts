import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Parser } from '../parser';
import { MetaRec } from '../metanode';
import { ParseView } from '../ViewParse';
import { IRecNode, IViewRec } from '../viewnode';

@Injectable()
export class MetaDataParserService {

    parseBootFile(b: Buffer): IViewRec {
        return new ParseView(new Parser(b).parseBoot() as MetaRec).nextView;
    }
}
