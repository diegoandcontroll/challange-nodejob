/* eslint-disable @typescript-eslint/ban-types */
import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class Identification {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ default: 'HOTMART' })
  data_source?: string;

  @Column()
  order_id: string;
}
