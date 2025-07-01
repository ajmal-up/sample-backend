import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  await app.listen(3000, async () =>
    Logger.verbose(`Portal App ⛺️🏠 started on ${await app.getUrl()}`),
  );
}
bootstrap();
