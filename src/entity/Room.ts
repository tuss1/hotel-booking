import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    room_number: string;
}
