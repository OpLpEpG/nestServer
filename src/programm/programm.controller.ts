import { Controller, Get, Res, Inject } from '@nestjs/common';
import { ProgrammService } from './programm.service';
import { Response } from 'express';
import { Configurable, ConfigParam, ConfigModule } from 'nestjs-config';

@Controller('programm')
export class ProgrammController {

  constructor(private readonly ps: ProgrammService) {
    console.log('com new prog cont' + ps.ind++);
   }

  @Get('bootfile')
  @Configurable()
  bootFile(@Res() res: Response, @ConfigParam('com.port', 'COM1') com: string) {

    res.sseSend(res.req.url);
    const ssc = this.ps.programm(com).subscribe(
      next => res.sseSend(next),
      err => {
        res.sseSend('err:' + err);
        Promise.resolve({then: () => {
          ssc.unsubscribe();
          res.sseSend('end');
          res.end();
        }});
      },
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
