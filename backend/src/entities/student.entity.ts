import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Class } from './class.entity';
import { User } from './user.entity';

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @ManyToOne(() => Class, (classEntity) => classEntity.students)
    class: Class;

    @ManyToOne(() => User, (userEntity) => userEntity.students)
    user: User;

    // Add additional fields as needed
}