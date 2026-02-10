import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('evidence_log')
export class EvidenceLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    evidence: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt: Date;

    constructor(evidence: string) {
        this.evidence = evidence;
    }
}