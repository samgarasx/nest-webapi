import { Module } from '@nestjs/common';
import { ApiController } from 'controllers/api.controller';
import { ConfigModule } from 'config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [ApiController],
  providers: []
})
export class AppModule {}
