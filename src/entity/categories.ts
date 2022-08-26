import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    category_name: string;

    @Column()
    type: string;

    
}