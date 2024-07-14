import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.info("App startetd at port 3000")
}
bootstrap();
