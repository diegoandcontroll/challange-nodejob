/* eslint-disable @typescript-eslint/ban-types */
import { Sales } from 'src/sales/sales.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity('identification')
export class Transaction {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ default: 'failed' })
  status?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  discount_value: number;

  @Column({ nullable: true })
  freight: number;

  @Column({ nullable: true })
  freight_type: string;

  @Column({ nullable: true })
  payment_type: string;

  @Column({ nullable: true })
  payment_card_brand: string;

  @Column({ nullable: true })
  payment_line: string;

  @Column({ nullable: true })
  payment_bar_code: string;

  @Column({ nullable: true })
  payment_url: string;

  @Column({ nullable: true })
  billet_url: string;

  @Column({ nullable: true })
  pix_qrcode: string;

  @Column({ nullable: true })
  pix_emv: string;

  @Column({ nullable: true })
  pix_ref: string;

  @Column({ nullable: true })
  pix_expiration_date: string;

  @Column({ nullable: true })
  pix_creation_date: string;

  @Column({ nullable: true })
  pix_url: string;

  @Column({ nullable: true })
  is_upsell: string;

  @OneToOne(() => Sales, (sales) => sales.transaction)
  sales: Sales;
}
