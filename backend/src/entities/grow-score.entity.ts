import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grow_score')
export class GrowScore {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    score: number;
    
    @Column()
    userId: string;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    
    // Add any additional fields or methods required for this entity
}