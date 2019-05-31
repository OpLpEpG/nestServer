import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DevDev, DevModbus } from './connect/connect.service';
import ModbusRTU from 'modbus-serial';
// import { join } from 'path';

let dev: DevModbus;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  dev = new DevModbus();
  const c: ModbusRTU = dev  as unknown as ModbusRTU;
  try {
    const r = await dev.connect('COM29', { baudRate: 125000 });
    console.log('r as DevDev open');
    c.setID(5);
    c.setTimeout(2000);
    const rz = await c.readCoils(11, 10);
    const res = await dev.disConnect();
    console.log('disConnect', rz.data[0]);
  } catch (e) {
    console.log(e);
  }
  console.log(`begin....`);
  await app.listen(3000);
}
bootstrap();
