import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { School } from './school.entity';

@Entity('grades')
export class Grade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => School, (school) => school.grades)
    school: School;

    @Column()
    schoolId: number;
}