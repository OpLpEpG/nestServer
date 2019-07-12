import fs = require('fs');
import { O_RDONLY, O_DIRECT } from 'constants';
import { StreamRam } from '../connect/ram.stream';
import { HttpException } from '@nestjs/common';
import { list as drivelist, Drive } from 'drivelist';
import { IReadSDRamReq, IBlockReadResult } from './connect.type';

class ErrorReadSDRam extends HttpException {
    constructor(private err: string) {
        super(err, 500);
    }
}

const NUM_RREAD = 1024 * 1024 * 32;

export class StreamSDRam extends StreamRam {

    static getRootDir(d: Drive): string {
        // TODO: add linux path
        return d.mountpoints[0].path;
    }
    static getDisk(d: Drive): string {
        // TODO: add linux path
        return '\\\\.\\' + d.mountpoints[0].path.replace('\\', '');
    }

    static async connect(req: IReadSDRamReq = {}): Promise<StreamSDRam> {

        let ds = await this.drives();

        if (ds.length === 0) { throw new ErrorReadSDRam('Нет USB дисков без файловой системы'); }
        if (req.path) {
            ds = ds.filter(d => d.device === req.path || d.mountpoints[0].path === req.path);
            if (ds.length !== 1) { throw new ErrorReadSDRam(`Нет ${req.path} USB диска без файловой системы`); }
        }
        if (ds.length !== 1) { throw new ErrorReadSDRam(`${ds.length} USB диска без файловой системы`); }
        req.too = req.too || ds[0].size;
        const fd = fs.openSync(this.getDisk(ds[0]), O_DIRECT || O_RDONLY);
        return new StreamSDRam(req, ds[0], fd);
    }
    static async drives(): Promise<Drive[]> {

        const isUnFormatted = (d: Drive): boolean => {
            if (d.mountpoints.length === 1) {
                const root = this.getRootDir(d);
                try {
                    fs.readdirSync(root);
                } catch (error) {
                    return true;
                }
            }
            return false;
        };
        const dl = await drivelist();
        return dl.filter(v => v.isUSB && v.size && isUnFormatted(v));
    }
    private constructor(req: IReadSDRamReq, public drive: Drive, private fd: number) {
        super(req);
        this.data = Buffer.allocUnsafe(NUM_RREAD);
    }
    protected _blockRead(): Promise<IBlockReadResult> {
        return new Promise((resolve, reject) =>
            fs.read(this.fd, this.data, 0, NUM_RREAD, this.current, (err, n, b) => err ? reject(err) : resolve({ data: b, len: n })));
    }
}
