import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Room} from "../entity/Room";

export class RoomController {

    private repository = getRepository(Room);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.find();
    }

    async allExcept(request: Request, response: Response, next: NextFunction) {
        const {from, to} = request.query;

        if (!from || !to) return JSON.stringify({message: 'Wrong query. Please set "from" and "to" paramenters'});

        return this.repository.query(`
            WITH joined AS (
                select room_number, book_date from (
                    select * from booking FULL JOIN room ON (booking.room_id = room.id)
                ) AS qwe
            ), filtered AS (
                SELECT * FROM joined
                EXCEPT
                SELECT * FROM joined WHERE book_date && daterange(TO_DATE('${from}', 'YYYY-MM-DD'), TO_DATE('${to}', 'YYYY-MM-DD'))
            )
            SELECT room_number FROM filtered
            GROUP BY room_number
            ORDER BY room_number ASC
        `);
    }
}