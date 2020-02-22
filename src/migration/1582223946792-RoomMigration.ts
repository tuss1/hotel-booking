import {MigrationInterface, QueryRunner} from "typeorm";
import {ROOM} from './tableNames';

export class RoomMigration1582223946792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE ${ROOM} (
                id SERIAL PRIMARY KEY,
                room_number varchar(40)
           );
        `);

        await queryRunner.query(`
            INSERT INTO ${ROOM} VALUES (DEFAULT, '101');
            INSERT INTO ${ROOM} VALUES (DEFAULT, '102');
            INSERT INTO ${ROOM} VALUES (DEFAULT, '103');
            INSERT INTO ${ROOM} VALUES (DEFAULT, '104');
            INSERT INTO ${ROOM} VALUES (DEFAULT, '105');
            INSERT INTO ${ROOM} VALUES (DEFAULT, '106');
            INSERT INTO ${ROOM} VALUES (DEFAULT, '107');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DROP TABLE ${ROOM};
        `);
    }

}
