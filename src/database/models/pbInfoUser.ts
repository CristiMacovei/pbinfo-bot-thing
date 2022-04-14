import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class pbInfoUser {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    email!: string

    @Column()
    password!: string
}