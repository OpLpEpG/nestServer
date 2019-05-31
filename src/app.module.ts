import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootController } from './boot/boot.controller';
import { BootModule } from './boot/boot.module';
import { MetaDataParserService } from './meta-data-parser/meta-data-parser.service';
import { join } from 'path';
// import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { ProgrammService } from './programm/programm.service';
import { ProgrammController } from './programm/programm.controller';
import { ProgrammModule } from './programm/programm.module';
import { ConfigModule } from 'nestjs-config';
import { ConnectService } from './connect/connect.service';
import { DataService } from './data/data.service';
import { GotoBootService } from './goto-boot/goto-boot.service';
import { LoadProgrammService } from './load-programm/load-programm.service';
import { VerifyProgrammService } from './verify-programm/verify-programm.service';

import * as path from 'path';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
// applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    ProgrammModule,

    // AngularUniversalModule.forRoot({
    //   viewsPath: BROWSER_DIR,
    //   bundle: require('e:/nodejs/Projects/umdom/bootloader/src/main.ts'),})
  ],
  controllers: [AppController, BootController, ProgrammController],
  // ProgrammService - singleton объявлен глобально (только в основном модуле),
  // BootController, ProgrammController- видят глобальный сервис только отсюда
  providers: [AppService, MetaDataParserService, ProgrammService, ConnectService, DataService,
     GotoBootService, LoadProgrammService, VerifyProgrammService],
})
export class AppModule { }
