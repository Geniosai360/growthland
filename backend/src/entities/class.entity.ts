import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Grade } from './grade.entity'; // Adjust the path based on actual structure

@Entity('class')
export class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Grade, grade => grade.classes)
    grade: Grade;
}