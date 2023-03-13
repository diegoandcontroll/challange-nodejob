/* eslint-disable @typescript-eslint/ban-types */
import { Comission } from 'src/comission/comission.entity';
import { Customer } from 'src/customer/customer.entity';
import { Identification } from 'src/identification/iden.entity';
import { Meta } from 'src/metadata/meta.entity';
import { Producer } from 'src/producer/producer.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import {
  Entity,
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

  @OneToOne(() => Identification, { eager: true, cascade: true })
  @JoinColumn()
  identification?: Identification;

  @OneToOne(() => Transaction, { eager: true, cascade: true })
  @JoinColumn()
  transaction?: Transaction;

  // @Column({ nullable: true })
  // product: string;

  @OneToOne(() => Producer, { eager: true, cascade: true })
  @JoinColumn()
  producer?: Producer;

  @OneToOne(() => Customer, { eager: true, cascade: true })
  @JoinColumn()
  customer?: Customer;

  @OneToOne(() => Comission, { eager: true, cascade: true })
  @JoinColumn()
  comission: Comission;

  @OneToOne(() => Meta, { eager: true, cascade: true })
  @JoinColumn()
  metadata?: Meta;
}
