import { Injectable } from '@nestjs/common';
import { Parser } from './parser';
import { MetaRec, MetaNode } from '../../../../types/metanode';
import { ParseView } from './ViewParse';
import { IViewRec } from '../../../../types/viewnode';
import { chip_t } from '../../../../types/CHIPS';
import { EMetaType } from '../../../../types/EMetaType';
import { EStdAttr } from '../../../../types/attr';
import { IParseBootFile } from '../../../../types/DTOparseBootFileRes';

@Injectable()
export class MetaDataParserService {

    public pars: Parser;
    public view: ParseView;

    private parsBoot: { m: MetaNode, c: chip_t };

    private getUserAttr(a: EMetaType): number | string | undefined {
        const n = (this.parsBoot.m as MetaRec).child.find(v => v.tip === a);
        return n && n.value; // n ? n.value : undefined;
    }

    parseBootFile(b: Buffer): IParseBootFile {
        this.pars = new Parser(b);
        this.parsBoot = this.pars.parseBoot();
        this.view = new ParseView(this.parsBoot.m as MetaRec, EStdAttr.T_WRK);
        return {
            chip: this.parsBoot.c,
            addr: this.getUserAttr(EMetaType.var_adr) as number,
            serial: this.getUserAttr(EMetaType.varSerial) as number,
            meta: this.parsBoot.m,
        };
    }
}
