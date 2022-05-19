import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Reservation } from "./Reservation"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Reservation, (reservation: Reservation) => reservation.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    reservations: Array<Reservation>

}
