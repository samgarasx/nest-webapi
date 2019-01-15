import {Get, Controller, Param, Post, Body, Put, Delete} from "@nestjs/common";
import {EntityManager} from "typeorm";
import {FruitEntity} from "../entities/fruit.entity";
import {Fruit} from "../models/fruit";
import {JsonResponse} from "../helpers/json.response";

@Controller("api/fruits")
export class FruitController {
  constructor(private readonly entityManager: EntityManager) {}

  @Get()
  all(): Promise<JsonResponse> {
    return this.entityManager.find(FruitEntity)
      .then(fruitEntities => {
        const fruits = fruitEntities.map(fruitEntity => {
          return new Fruit(fruitEntity.id, fruitEntity.no, fruitEntity.description);
        });

        return JsonResponse.success(fruits);
      });
  }

  @Get(":id")
  one(@Param("id") id: number): Promise<JsonResponse> {
    return this.entityManager.findOne(FruitEntity, id)
      .then(fruitEntity => {
        if (!fruitEntity) {
          return JsonResponse.failure("Fruit does not exists");
        }

        const fruit = new Fruit(fruitEntity.id, fruitEntity.no, fruitEntity.description);

        return JsonResponse.success(fruit);
      });
  }

  @Post()
  new(@Body() fruit: Fruit): Promise<JsonResponse> {
    return this.entityManager.find(FruitEntity, { where: { no: fruit.no } })
      .then(fruitEntities => {
        if (!fruitEntities[0]) {
          const fruitEntity = new FruitEntity();

          fruitEntity.no = fruit.no;
          fruitEntity.description = fruit.description;

          return this.entityManager.save(fruitEntity);
        }

        return null;
      })
      .then(fruitEntity => {
        if (!fruitEntity) {
          return JsonResponse.failure("Fruit already exists");
        }

        fruit = new Fruit(fruitEntity.id, fruitEntity.no, fruitEntity.description);

        return JsonResponse.success(fruit);
      });
  }

  @Put(":id")
  edit(@Param("id") id: number, @Body() fruit: Fruit): Promise<JsonResponse> {
    return this.entityManager.findOne(FruitEntity, id)
      .then(fruitEntity => {
        if (fruitEntity) {
          fruitEntity.description = fruit.description;

          return this.entityManager.save(fruitEntity);
        }

        return null;
      })
      .then(fruitEntity => {
        if (!fruitEntity) {
          return JsonResponse.failure("Fruit does not exists");
        }

        fruit = new Fruit(fruitEntity.id, fruitEntity.no, fruitEntity.description);

        return JsonResponse.success(fruit);
      });
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<JsonResponse> {
    return this.entityManager.findOne(FruitEntity, id)
      .then(fruitEntity => {
        if (fruitEntity) {
          this.entityManager.delete(FruitEntity, { id });
        }

        return fruitEntity;
      })
      .then(fruitEntity => {
        if (!fruitEntity) {
          return JsonResponse.failure("Fruit does not exists");
        }

        const fruit = new Fruit(fruitEntity.id, fruitEntity.no, fruitEntity.description);

        return JsonResponse.success(fruit);
      });
  }
}
