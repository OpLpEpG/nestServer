import { Controller, Get, Res } from '@nestjs/common';
import { ProgrammService } from './programm.service';
import { Response } from 'express';
import { map } from 'rxjs/operators';


@Controller('programm')
export class ProgrammController {
    constructor(private readonly ps: ProgrammService) { }

    @Get('bootfile')
    async bootFile(/*@UploadedFile() file: any,*/ @Res() res: Response/**/) {

      await this.ps.programm().subscribe(
            next => res.write(JSON.stringify({next})),
            err => res.write(JSON.stringify(err)),
            () => res.end());
    }

}
