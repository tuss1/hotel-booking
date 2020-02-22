import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Room} from "./Room";
import {Customer} from "./Customer";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    room_id: number;

    @Column()
    customer_id: number;

    @Column()
    book_date: string;

    @Column()
    vip: boolean;

    @OneToOne(type => Room)
    @JoinColumn({name: 'room_id'})
    room: Room;

    @OneToOne(type => Customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer;
}
