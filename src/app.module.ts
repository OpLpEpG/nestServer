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

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
// applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [BootModule, ProgrammModule,
    // AngularUniversalModule.forRoot({
    //   viewsPath: BROWSER_DIR,
    //   bundle: require('e:/nodejs/Projects/umdom/bootloader/src/main.ts'),})
  ],
  controllers: [AppController, BootController, ProgrammController],
  providers: [AppService, MetaDataParserService, ProgrammService],
})
export class AppModule { }
