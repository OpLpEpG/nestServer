import { SerialPortOptions } from 'modbus-serial/ModbusRTU';

const serialOpt: { port: string; options: SerialPortOptions} = {
    port: process.env.COM_PORT || 'COM2',
    options: {
        baudRate: +process.env.BAUD_RATE || 125000,
        parity: 'none',
        dataBits: 8,
        stopBits: 1,
    },
};

export default serialOpt;
