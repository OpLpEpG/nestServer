import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { SseMiddleware } from './sse.niddleware';
import { ProgrammController } from './programm.controller';
import { ProgrammService } from './programm.service';

@Module({
    //  controllers: [ProgrammController],
    //  providers: [ProgrammService],
 //   exports: [ProgrammModule],
})
export class ProgrammModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(SseMiddleware)
            .forRoutes({ path: 'programm/bootfile', method: RequestMethod.GET });
    }
}
