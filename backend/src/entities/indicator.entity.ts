import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'indicators' })
export class Indicator {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'float' })
    value: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    constructor(name: string, value: number, description?: string) {
        this.name = name;
        this.value = value;
        this.description = description;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}