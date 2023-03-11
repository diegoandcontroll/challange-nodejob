/* eslint-disable @typescript-eslint/ban-types */
import { Customer } from 'src/customer/customer.entity';
import { Identification } from 'src/identification/iden.entity';
import { Meta } from 'src/metadata/meta.entity';
import { Producer } from 'src/producer/producer.entity';
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

  @OneToOne(() => Producer)
  @JoinColumn()
  producer?: Producer;

  @OneToOne(() => Customer)
  @JoinColumn()
  customer?: Customer;

  @Column({ nullable: true })
  comission: string;

  @OneToOne(() => Meta)
  @JoinColumn()
  metadata?: Meta;
}
