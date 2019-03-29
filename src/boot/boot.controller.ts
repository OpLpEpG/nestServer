import { Controller, Post, UseInterceptors, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { extname } from 'path';

@Controller('boot')
export class BootController {

    @Post('bootfile')
    @UseInterceptors(FileInterceptor('bootfile',
    {
        storage: diskStorage({
            destination: './bootfile',
            filename: (req: any, file: { fieldname: string; }, cb: (arg0: any, arg1: string) => void) => {
                cb(null, 'boot.bin');
              },
        }),
    },
    ))
    async chekFile( @UploadedFile() file: Blob | File | any) {
// tslint:disable-next-line: no-console
        if  (!file) {console.log('nopp'); }
// tslint:disable-next-line: no-console
        console.log(`${file.name}`);
    }

}
