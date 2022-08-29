import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("chart account")
export class ChartAccount {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  account_id: string;

  @Column()
  chart_account_name: string;

  @Column()
  chart_account_type: string;

  @Column()
  parent_chart_account: string;

  @Column()
  currency_id: string;
  @Column()
  balance: number;
}
