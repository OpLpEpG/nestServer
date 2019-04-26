import { Controller, Post, UseInterceptors, UploadedFile, Res, Header, UseFilters} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';
import { BaseExceptionFilter } from '@nestjs/core';

@Controller('boot')
// @UseFilters(BaseExceptionFilter)
export class BootController {

    constructor(private readonly ps: MetaDataParserService) {}

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile'))
    async bootFile( @UploadedFile() file: any) {

        const b: Buffer = file.buffer;

        return  (this.ps.parseBootFile(b));
    }
}
