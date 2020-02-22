import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: string;
}
