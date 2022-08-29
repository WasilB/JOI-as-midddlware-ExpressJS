import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumnCannotBeNullableError,
} from "typeorm";

@Entity("category")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  category_name: string;

  @Column()
  type: string;
}
