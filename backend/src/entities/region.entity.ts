import { Entity, Column, OneToMany } from 'typeorm';
import { School } from './school.entity';

@Entity() 
export class Region {
    @Column({ primary: true })
    id: number;

    @Column() 
    name: string;

    @Column() 
    description: string;

    @Column() 
    stateCode: string;

    @OneToMany(() => School, school => school.region)
    schools: School[];
}