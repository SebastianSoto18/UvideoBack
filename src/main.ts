import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { CORS } from './constants/cors';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));
  app.useGlobalPipes(new ValidationPipe({
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  const configService = app.get(ConfigService);
  app.enableCors(CORS);

  await app.listen(configService.get('PORT'));
}
bootstrap();
