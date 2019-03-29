import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
// tslint:disable-next-line: no-console
  console.log(`begin....`);
  await app.listen(3000);
}
bootstrap();
