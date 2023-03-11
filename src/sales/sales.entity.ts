/* eslint-disable @typescript-eslint/ban-types */
import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class Sales {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column()
  identification?: string;

  @Column()
  transaction: string;

  @Column()
  product: string;

  @Column()
  producer: string;

  @Column()
  customer: string;

  @Column()
  comission: string;

  @Column()
  metadata: string;
}
