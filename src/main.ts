import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Modbus, DevModbus } from './connect/connect.modbus';
import { DevWire } from './connect/connect.wire';
import { MetaRec } from '../../../types/metanode';
import { ParseView } from './meta-data-parser/ViewParse';
import { Parser } from './meta-data-parser/parser';
import { EStdAttr } from '../../../types/attr';
import { createReadStream, open, read, stat, readdir } from 'fs';
import { O_DIRECT, O_RDONLY } from 'constants';
import { StreamSDRam } from './connect/ram.stream.usbsd';
import { IStatistic, Statistic } from './connect/statistic';
import fs = require('fs');
import { Speed } from './connect/speed';
import bodyParser = require('body-parser');

let dev: Modbus;
let devc: DevWire;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.text());
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.raw());
  app.use(bodyParser.json());
  // devc = new DevWire();
  // await devc.connect('COM46', { baudRate: 125000 });
  // try {
  //   const r = await devc.transactionP({ adr: 7, command: 7, data: Buffer.from([1, 0x30]) });
  //   console.log(r.data);
  // } catch (error) {
  //   console.log(error);
  // }

  // const drivelist = require('drivelist');
  // const drives = await drivelist.list();
  // console.log(drives);
  // const FF = '\\\\.\\F:';
  // readdir('F:\\', (err, files) => {
  //   console.log(err, files);
  // });
  // open(FF, O_DIRECT || O_RDONLY, (err, fd) => {
  //   console.log(err, fd);
  //   const b = Buffer.allocUnsafe(512);
  //   read(fd, b, 0, 512, 0, (err1, br, bf) => {
  //     console.log(err1, br, bf);
  //   })
  // });

  // const sr = await StreamSDRam.connect({endOnEmpty: false, too: 1024 * 1024 * 1024 });
  // sr.on('statistic', (b: Statistic) => console.log(`run: ${b.procent.toFixed(1)}% : ${b.status},\
  //         speed: ${b.speed.toFixed(2)}(MB/c) times: ${b.strTimeFromBegin}  ${b.strTimeToEnd}`));
  // sr.pipe(fs.createWriteStream('../file_stream.bin', { autoClose: true }));

  // const wrk = (ve: any, size: number) => {
  //   devc.work({ adr: 7, size })
  //   .then((v) => {
  //     console.log(ve.nextView(v.data));
  //   })
  //   .catch(console.log);
  // };
  // try {
  //   const inf = await devc.info(7);
  //   console.log(inf.meta as MetaRec);
  //   const ve = new ParseView(inf.meta as MetaRec, EStdAttr.T_WRK);
  //   const size = (Parser.findRoot(inf.meta, EStdAttr.T_WRK) as MetaRec).devSize;
  //   const speed = new Speed((Parser.findRoot(inf.meta, EStdAttr.AT_SPEED).value as number));
  //   console.log(speed);
  //   wrk(ve, size);
  //   wrk(ve, size);
  //   wrk(ve, size);
  //   await devc.clearQeue();
  //   console.log('Empty QEUE');
  //   const wr = await devc.work({ adr: 7, size });
  //   console.log(ve.nextView(wr.data));
  // } catch (e) {
  //   console.log(`LOG ERROR: ${e}`);
  // }
  // await devc.disConnect();

  // dev = DevModbus.Create();
  // try {
  //   const r = await dev.connect('COM46', { baudRate: 125000 });
  //   console.log('r as DevDev open');
  //   dev.setID(5);
  //   dev.setTimeout(2000);
  //   const rz = await dev.readCoils(11, 10);
  //   const res = await dev.disConnect();
  //   console.log('disConnect', rz.data[0]);
  // } catch (e) {
  //   console.log(e);
  // }

  console.log(`begin....`);
  await app.listen(3000);
}
bootstrap();
