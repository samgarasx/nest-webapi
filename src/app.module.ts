import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ApiController } from './controllers/api.controller';
import { FruitController } from './controllers/fruit.controller';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'sqlite',
        database: `db/${configService.get('database.name')}`,
        entities: [`${__dirname}/entities/**.entity{.ts,.js}`],
        synchronize: true
      } as ConnectionOptions),
      inject: [ConfigService]
    })
  ],
  controllers: [ApiController, FruitController],
  providers: []
})
export class AppModule {}
