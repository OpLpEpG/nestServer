import { ConnectOptions } from '../connect/connect.type';

const serialOpt: { port: string; options: ConnectOptions} = {
    port: process.env.COM_PORT || 'COM2',
    options: {
        baudRate: +process.env.BAUD_RATE || 125000,
        parity: 'none',
        dataBits: 8,
        stopBits: 1,
    },
};

export default serialOpt;
