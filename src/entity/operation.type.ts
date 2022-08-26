import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity('operation_type')
export class OperationType {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    operation_type_name: string;

    @Column()
    operation_type_id: string;

}