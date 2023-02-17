import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity()
export class Form {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    email: string;

    @Column()
    message: string;

    @CreateDateColumn({ type: 'timestamp'})
    sent: Date;
}
