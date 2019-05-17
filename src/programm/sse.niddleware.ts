
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class SseMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: () => void) {

        console.log('Request...');

        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'X-Accel-Buffering': 'no',
        });

        res.sseSend = (data: {}) => {
            res.write('data: ' + JSON.stringify(data) + '\n\n');
        };

        next();
    }
}
