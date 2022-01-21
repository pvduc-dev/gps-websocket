import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticatedSocketIoAdapter } from './adapter/AuthenticatedWsIoAdapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useWebSocketAdapter(new AuthenticatedSocketIoAdapter());
  await app.listen(3000);
}
bootstrap();
