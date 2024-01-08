import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as elastic from 'elastic-apm-node'

const apm = elastic.start({
  serviceName:  'feedback-forms',
  serverUrl: 'http://fleet-server:8200',
  secretToken: 'supersecrettoken',
  environment: 'development'
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
