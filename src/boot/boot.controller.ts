import { Controller, Post, UseInterceptors, UploadedFile, Res, Header, UseFilters } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';
import { ProgrammService } from '../programm/programm.service';

@Controller('boot')
export class BootController {

    constructor(private readonly ps: MetaDataParserService, private readonly pr: ProgrammService) {
        console.log('com new boot cont' + pr.ind++);
     }

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile'))
    bootFile(@UploadedFile() file: any ) {

        const b: Buffer = file.buffer;
        const rez = this.ps.parseBootFile(b);
        this.pr.buffer = b;
        this.pr.data = rez;
        return rez;
    }
}
