import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "./config/config.module";
import {ApiController} from "./controllers/api.controller";
import {FruitController} from "./controllers/fruit.controller";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [ApiController, FruitController],
  providers: []
})
export class AppModule {}
