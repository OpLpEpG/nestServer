import { Controller, Post, UseInterceptors, UploadedFile, Res, Header, UseFilters } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { ProgrammService } from '../programm/programm.service';

@Controller('boot')
// @UseFilters(BaseExceptionFilter)
export class BootController {

    constructor(private readonly ps: MetaDataParserService, private readonly pr: ProgrammService) { }

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile'))
    async bootFile(@UploadedFile() file: any /*, @Res() res: Response*/) {

        const b: Buffer = file.buffer;
        const rez = this.ps.parseBootFile(b);
        this.pr.buffer = b;
        this.pr.data = rez;
        return rez;
    }
}
