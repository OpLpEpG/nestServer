import { Controller, Get, Res } from '@nestjs/common';
import { ProgrammService } from './programm.service';
import { Response } from 'express';

@Controller('programm')
export class ProgrammController {

  constructor(private readonly ps: ProgrammService) { }

  @Get('bootfile')
  async bootFile(@Res() res: Response) {

    await res.sseSend(res.req.url);
    this.ps.programm().subscribe(
      next => res.sseSend(next),
      err => res.sseSend(err),
      () => {
        res.sseSend('end');
        res.end();
      });
  }

  @Get('terminate')
  bootEvents(@Res() res: Response) {

    this.ps.terminate();

    res.send('OK');
  }

}
