import {MigrationInterface, QueryRunner} from "typeorm";
import {BOOKING, ROOM, CUSTOMER} from './tableNames';

export class BookingMigration1582223955263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE ${BOOKING} (
                id SERIAL PRIMARY KEY,
                room_id integer,
                customer_id integer,
                book_date daterange,
                vip boolean,
                FOREIGN KEY (room_id) REFERENCES ${ROOM} (id),
                FOREIGN KEY (customer_id) REFERENCES ${CUSTOMER} (id),
                EXCLUDE USING gist (room_id WITH =, book_date WITH &&)
           );
        `);

        await queryRunner.query(`
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 3, 1, '[2020-02-20, 2020-02-22]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 3, 2, '[2020-01-12, 2020-01-18]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 3, 2, '[2020-01-20, 2020-02-02]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 2, 1, '[2020-02-15, 2020-02-22]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 2, 1, '[2020-03-02, 2020-03-11]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 4, 1, '[2020-01-20, 2020-01-25]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 4, 1, '[2020-02-10, 2020-02-22]');
            INSERT INTO ${BOOKING} VALUES (DEFAULT, 5, 2, '[2020-02-23, 2020-03-22]');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DROP TABLE ${BOOKING};
        `);
    }
}
