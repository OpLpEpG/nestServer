import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootController } from './boot/boot.controller';
import { BootModule } from './boot/boot.module';

@Module({
  imports: [BootModule],
  controllers: [AppController, BootController],
  providers: [AppService],
})
export class AppModule {}
