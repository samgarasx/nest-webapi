import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFruit1547591168386 implements MigrationInterface {
    // @ts-ignore
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TABLE fruit (
                      id INTEGER NOT NULL PRIMARY KEY,
                      no VARCHAR NOT NULL UNIQUE,
                      description TEXT NOT NULL
                  )`
        );
    }

    // @ts-ignore
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE IF EXISTS fruit`);
    }
}
