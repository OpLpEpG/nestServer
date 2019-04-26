import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootController } from './boot/boot.controller';
import { BootModule } from './boot/boot.module';
import { MetaDataParserService } from './meta-data-parser/meta-data-parser.service';
import { join } from 'path';
// import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
// applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [BootModule,
    // AngularUniversalModule.forRoot({
    //   viewsPath: BROWSER_DIR,
    //   bundle: require('e:/nodejs/Projects/umdom/bootloader/src/main.ts'),})
    ],
  controllers: [AppController, BootController],
  providers: [AppService, MetaDataParserService],
})
export class AppModule {}
