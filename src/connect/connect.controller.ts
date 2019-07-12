import { Controller, Post, Body, Param, Get, Query, BadRequestException, UseInterceptors, Req, Res } from '@nestjs/common';
import { ConnectService, ErrorConnectService } from './connect.service';
import { ConnectOptions, IConnection } from './connect.type';
import serialOpt from '../config/com';

@Controller('connect')
export class ConnectController {

    constructor(private readonly conn: ConnectService) {
        console.log('com new ConnectController cont');
    }

    @Get('open')
    async connect(@Query('port') port?: string, @Query('options') options?: string) {
        try {
            port = port || serialOpt.port;
            const opt: ConnectOptions = serialOpt.options;
            if (options) { Object.assign(opt, JSON.parse(options)); }
            console.log(port, opt);
            if (this.conn.connection.isOpen) { await this.conn.connection.disConnect(); }
            await this.conn.connection.connect(port, opt);
            return 'OK';
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get('close')
    async disConnect() {
        if (this.conn.connection.isOpen) { await this.conn.connection.disConnect(); }
        return 'OK';
    }

    @Post('send')
    async send(@Req() req: any) {
        if (req.body) {
            // console.log(`data: ${req.body.toString('HEX')} ` + test);
            const rez = await this.conn.wire.transactionP({ data: req.body });
            if (rez.error) {return `error: &{rez.error}`; } else { req.res.end(rez.data, 'binary'); }
        } else { throw new BadRequestException('Buffer not Foun'); }
    }
}
