import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'qr-log'})
export class QrCode {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    date: string;
}
