import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('fruit')
export class FruitEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    @Index({ unique: true })
    no: string;

    @Column({ type: 'text' })
    description: string;
}
