import { Module } from '@nestjs/common';
import { BootController } from './boot.controller';

@Module({
    controllers: [BootController],
})
export class BootModule {}
