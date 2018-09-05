import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.cwd()}/config/config.${process.env.NODE_ENV}.json`)
    }
  ],
  exports: [ConfigService]
})
export class ConfigModule {}
