import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  await app.listen(3001, async () =>
    Logger.verbose(`Portal App ⛺️🏠 started on ${await app.getUrl()}`),
  );
}

bootstrap();
