import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("account_type")
export class AccountType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  account_type_name: string;
}
