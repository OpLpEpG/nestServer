import { IReadArray } from './connect.type';

export interface IStatistic {
    readed: number;
    procent: number;
    speed: number;
    timetoEnd: number;
    timeFromBegin: number;
    status: string;
}

export class Statistic implements IStatistic {

    private timeBegin: number;
    private flagBegin = true;
    private size: number | undefined;

    readed: number;
    procent: number;
    speed: number;
    timetoEnd: number;
    timeFromBegin: number;
    status: string;

    get strTimeFromBegin(): string { return new Date(this.timeFromBegin).toLocaleTimeString([], { timeZone: 'UTC' }); }
    get strTimeToEnd(): string { return new Date(this.timetoEnd).toLocaleTimeString([], { timeZone: 'UTC' }); }

    constructor(private req: IReadArray) {
        if (req.too && req.too > req.from) {
            this.size = req.too - req.from;
        }
    }
    begin() {
        if (this.flagBegin) {
            this.timeBegin = Date.now();
            this.flagBegin = false;
        }
    }
    update(cnt: number, status: string) {
        this.status = status;
        this.readed = cnt - this.req.from;
        this.timeFromBegin = Date.now() - this.timeBegin;
        if (this.timeFromBegin) {
            const spd = this.readed / this.timeFromBegin;
            this.speed = spd / 1024 / 1024 * 1000; // MB/sec
            if (this.size) {
                this.timetoEnd = (this.size - this.readed) / spd;
                this.procent = (1 - this.readed / this.size) * 100;
            }
        }
    }
}
