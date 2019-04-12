import { Module } from '@nestjs/common';
import { BootController } from './boot.controller';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';

@Module({
    controllers: [BootController],
    providers: [MetaDataParserService],
})
export class BootModule {}
