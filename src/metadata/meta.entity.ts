import { Sales } from 'src/sales/sales.entity';
import { Entity, Column, PrimaryColumn, Generated, OneToOne } from 'typeorm';

@Entity('meta')
export class Meta {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ nullable: true })
  affiliate_id?: string;

  @Column({ nullable: true })
  utm_source?: string;

  @Column({ nullable: true })
  utm_medium?: string;

  @Column({ nullable: true })
  utm_campaign?: string;

  @OneToOne(() => Sales, (sales) => sales.metadata)
  sales: Sales;
}
