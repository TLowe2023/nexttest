import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.BACKEND_PORT ?? 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
