import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DevDev, DevModbus } from './connect/connect.service';
import ModbusRTU from 'modbus-serial';
import { MetaRec } from '../../../types/metanode';
import { ParseView } from './meta-data-parser/ViewParse';
import { Parser } from './meta-data-parser/parser';
import { EStdAttr } from '../../../types/attr';
// import { join } from 'path';

let dev: DevModbus;
let devc: DevDev;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  devc = new DevDev();
  await devc.connect('COM46', { baudRate: 125000 });
  // try {
  //   const r = await devc.transactionP({ adr: 7, command: 7, data: Buffer.from([1, 0x30]) });
  //   console.log(r.data);
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    const inf = await devc.info(7);

    console.log(inf.meta as MetaRec);
    const ve = new ParseView(inf.meta as MetaRec);
    const size = (Parser.findRoot(inf.meta, EStdAttr.T_WRK) as MetaRec).devSize;
    const wr = await devc.work({adr: 7, size});
    ve.updateValue(wr.data);
    console.log(ve.toJSON());

  } catch (e) {
    console.log(e);
  }


  // dev = new DevModbus();
  // const c: ModbusRTU = dev  as unknown as ModbusRTU;
  // try {
  //   const r = await dev.connect('COM29', { baudRate: 125000 });
  //   console.log('r as DevDev open');
  //   c.setID(5);
  //   c.setTimeout(2000);
  //   const rz = await c.readCoils(11, 10);
  //   const res = await dev.disConnect();
  //   console.log('disConnect', rz.data[0]);
  // } catch (e) {
  //   console.log(e);
  // }
  console.log(`begin....`);
  await app.listen(3000);
}
bootstrap();
