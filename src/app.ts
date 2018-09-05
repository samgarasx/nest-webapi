import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { ConfigService } from 'config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const host = configService.get('server.host') as string;
  const port = configService.get('server.port') as number;

  await app.listen(port, host);
}
bootstrap();
