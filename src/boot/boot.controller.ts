import { Controller, Post, UseInterceptors, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage, memoryStorage } from 'multer';
// import { extname } from 'path';

@Controller('boot')
export class BootController {

    bootFileData = {
        chip: Number,
        serial: Number,
        address: Number,
        buff: Array,
    };

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile'))
    async bootFile( @UploadedFile() file: any) {
        const b: Buffer = file.buffer;
        // TODO: write parser service
        // for (const n of file.buffer.values()) {
        //     console.log(n);
        // }
        console.log(`${b.toString('hex', 0, 100)}`);
    }

}
