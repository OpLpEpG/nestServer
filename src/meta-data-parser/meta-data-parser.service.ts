import { Injectable } from '@nestjs/common';
import { Parser } from './parser';
import { MetaRec } from '../types/metanode';
import { ParseView } from './ViewParse';
import { IViewRec } from '../types/viewnode';

@Injectable()
export class MetaDataParserService {

    parseBootFile(b: Buffer): IViewRec {
        return new ParseView(new Parser(b).parseBoot() as MetaRec).nextView;
    }
}
