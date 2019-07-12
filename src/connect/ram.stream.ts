import { Readable, ReadableOptions } from 'stream';
import { HttpException } from '@nestjs/common';
import { Statistic} from './statistic';
import { IReadRamReq, defaultReadRamReq, IBlockReadResult, IReadRamReqNTry } from './connect.type';

class ErrorTerminate extends HttpException {
    constructor() {
        super(`Прервано пользователем`, 500);
    }
}

export class ErrorReadRam extends HttpException {
    constructor(err: string[]) {
        super(`Ошибка чтения RAM ${err.toString()}`, 500);
    }
}

export class StreamRam extends Readable {

    private statistic: Statistic;

    protected data: Buffer;
    protected current: number;
    protected terminateFlag: boolean;
    protected req: IReadRamReq;

    get from(): number { return this.req.from; }
    get readed(): number { return this.current - this.req.from; }
    get treminated(): boolean { return this.terminateFlag; }
    terminate() { this.terminateFlag = true; }

    constructor(req: IReadRamReq, opts?: ReadableOptions) {
        super(opts);
        this.req = defaultReadRamReq;
        Object.assign(this.req, req);
        this.current = this.req.from;
        this.statistic = new Statistic(this.req);
    }
    private checkTreminate() {
        if (this.terminateFlag) { throw new ErrorTerminate(); }
    }
    protected async _blockRead(): Promise<IBlockReadResult> { return {}; }
    // tslint:disable-next-line: no-empty
    protected _beginBlockRead(): void { }
    // tslint:disable-next-line: no-empty
    protected _endRead(): void { }

    async _read() {
        const err: string[] = [];
        this._beginBlockRead();
        this.statistic.begin();
        // попытки
        for (let i = 0; i < (this.req as IReadRamReqNTry).repeatOnErr; i++) {
            try {
                this.checkTreminate();
                // принимаем
                const tr = await this._blockRead();
                this.checkTreminate();
                if (tr.error) {
                    this.statistic.update(this.current, `ошибка ${tr.error}`);
                    this.emit('statistic', this.statistic);
                    throw new ErrorReadRam([tr.error]);
                }
                // проверка на окончание
                const size = this.req.too && this.req.too <= this.current + tr.len;
                const empty = this.req.endOnEmpty && tr.data.slice(-256).every(v => v === 0xFF || v === 0);
                if (size || empty) {
                    // truncate last FF
                    for (let j = tr.len - 1; j >= 0; j--) {
                        const d = tr.data.readUInt8(j);
                        if (d !== 0xFF && d !== 0) {
                            // отдаем last
                            this.current += j + 1;
                            this.push(tr.data.slice(0, j));
                            break;
                        }
                    }
                    // окончание
                    this._endRead();
                    this.push(null);
                    this.statistic.update(this.current, empty ? 'пустая память' : 'конец памяти');
                    console.log(`END read ram : ${this.current.toString(16)}`);
                } else {
                    // отдаем
                    this.current += tr.len;
                    this.push(tr.data);
                    // прогресс
                    this.statistic.update(this.current, 'чтение');
                    console.log(`read ram : ${this.current.toString(16)}`);
                    this.checkTreminate();
                }
                this.emit('statistic', this.statistic);
                return; // END _read()
            } catch (error) {
                if (error instanceof ErrorTerminate) {
                    this.statistic.update(this.current, `прервано`);
                    this.emit('statistic', this.statistic);
                    this._endRead();
                    throw error;
                }
                err.push(error.message);
            }
        } // END попытки
        // неудача
        throw new ErrorReadRam(err);
    }

}
