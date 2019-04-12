import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootController } from './boot/boot.controller';
import { BootModule } from './boot/boot.module';
import { MetaDataParserService } from './meta-data-parser/meta-data-parser.service';

@Module({
  imports: [BootModule],
  controllers: [AppController, BootController],
  providers: [AppService, MetaDataParserService],
})
export class AppModule {}
