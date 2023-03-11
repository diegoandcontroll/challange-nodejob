/* eslint-disable @typescript-eslint/ban-types */
import { Identification } from 'src/identification/iden.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  Generated,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('sales')
export class Sales {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @OneToOne(() => Identification)
  @JoinColumn()
  identification?: Identification;

  @OneToOne(() => Transaction)
  @JoinColumn()
  transaction?: Transaction;

  @Column({ nullable: true })
  product: string;

  @Column({ nullable: true })
  producer: string;

  @Column({ nullable: true })
  customer: string;

  @Column({ nullable: true })
  comission: string;

  @Column({ nullable: true })
  metadata: string;
}
