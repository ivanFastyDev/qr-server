import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../user/entities/user.entity';

@Entity({name: 'transaction-log'})
export class Transaction {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    date: string;

    @Column({type: 'float'})
    amount: number;

    @ManyToOne(() => User, (user) => user.transactions, {onDelete: 'CASCADE'})
    user: User;
}