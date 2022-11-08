import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from '../../transactions/entities/Transaction.entity';

@Entity({name: 'usuario'})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    name: string;

    @Column({type: 'float'})
    saldo: number;

    @OneToMany(() => Transaction, (transaction) => transaction.user, {cascade: true, eager: true})
    transactions?: Transaction[];
}
