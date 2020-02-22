import {MigrationInterface, QueryRunner} from "typeorm";
import {CUSTOMER} from './tableNames';

export class CustomerMigration1582223936115 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE ${CUSTOMER} (
                id SERIAL PRIMARY KEY,
                phone varchar(40)
           );
        `);

        await queryRunner.query(`
            INSERT INTO ${CUSTOMER} VALUES (DEFAULT, '123456789');
            INSERT INTO ${CUSTOMER} VALUES (DEFAULT, '987654321');
            INSERT INTO ${CUSTOMER} VALUES (DEFAULT, '453627189');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DROP TABLE ${CUSTOMER};
        `);
    }

}
