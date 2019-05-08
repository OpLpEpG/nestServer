import { Module } from '@nestjs/common';
import { BootController } from './boot.controller';
import { MetaDataParserService } from '../meta-data-parser/meta-data-parser.service';
import { ProgrammService } from '../programm/programm.service';

@Module({
    controllers: [BootController],
    providers: [MetaDataParserService, ProgrammService],
})
export class BootModule {}
