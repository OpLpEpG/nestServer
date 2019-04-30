import { Controller, Post, UseInterceptors, UploadedFile, Res, Header, UseFilters } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

@Controller('boot')
// @UseFilters(BaseExceptionFilter)
export class BootController {

    constructor(private readonly ps: MetaDataParserService) { }

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile'))
    async bootFile(@UploadedFile() file: any, @Res() res: Response) {

        const b: Buffer = file.buffer;
        const rez = this.ps.parseBootFile(b);

        res.set('chip', rez.chip.name);
        res.set('addr', rez.addr.toString());
        res.set('serial', rez.serial.toString());
        res.send(rez.meta);
    }
}
