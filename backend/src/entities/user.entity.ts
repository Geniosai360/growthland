import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'jsonb', nullable: false })
    roles: string[];

    @Column({ type: 'jsonb', nullable: false })
    context: object;
}