import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import * as randomString from 'randomstring'

@Entity('transaction_type')
export class TransactionType {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    transaction_type_id: string;

    @Column()
    transaction_type_name: string;

    @Column()
    transaction_type_details: string;

    @Column()
    transaction_type_purged: boolean;

}