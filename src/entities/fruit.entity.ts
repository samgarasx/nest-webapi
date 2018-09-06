import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('fruit')
export class FruitEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ length: 20 })
    @Index({ unique: true })
    no: string;

    @Column({  length: 50 })
    description: string;
}
