import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('fruit')
export class FruitEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique: true })
    no: string;

    @Column()
    description: string;
}
