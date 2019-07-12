import { StreamRam, ErrorReadRam } from './ram.stream';
import { ECommands } from '../../../../types/commands';
import { IBlockReadResult, IReadCommRamReq, defaultReadCommRamReq } from './connect.type';

export class StreamCommRam extends StreamRam {

    constructor(req: IReadCommRamReq, private readonly owner: any) {
        super(req, { highWaterMark: req.highWaterMark });
        this.req = defaultReadCommRamReq;
        Object.assign(this.req, req);
        if (!req.too && !req.endOnEmpty) { throw new ErrorReadRam(['неизвестен конец памяти']); }
        this.data = Buffer.allocUnsafe(4 + 4);
        this.data.writeUInt32LE(req.highWaterMark, 4);
    }

    protected _beginBlockRead(): void {
        this.data.writeUInt32LE(this.current, 0);
    }

    protected async _blockRead(): Promise<IBlockReadResult> {
        try {
            const {adr, timeout, highWaterMark} = this.req as IReadCommRamReq;
            const tr = await this.owner.transactionP({
                adr,
                command: ECommands.CMD_ERAM,
                data: this.data,
                timeout,
                expectedLen: highWaterMark + 3,
            });
            return { data: tr.data, len: tr.data.length };

        } catch (error) {
            return { error };
        }
    }
}
