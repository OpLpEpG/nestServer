import { Controller, Post, UseInterceptors, UploadedFile, Res, Header} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';

@Controller('boot')
export class BootController {

    constructor(private readonly ps: MetaDataParserService) {}

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile'))
    async bootFile( @UploadedFile() file: any) {

        const b: Buffer = file.buffer;

        return this.ps.parse(b);
    }
}
