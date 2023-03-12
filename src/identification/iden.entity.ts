/* eslint-disable @typescript-eslint/ban-types */
import { Sales } from 'src/sales/sales.entity';
import { Entity, Column, PrimaryColumn, Generated, OneToOne } from 'typeorm';

@Entity('identification')
export class Identification {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ default: 'HOTMART', nullable: true })
  data_source?: string;

  @Column({ default: null, nullable: true })
  order_id?: string;

  @OneToOne(() => Sales, (sales) => sales.identification)
  sales: Sales;
}
