import { Sales } from 'src/sales/sales.entity';
import { Entity, Column, PrimaryColumn, Generated, OneToOne } from 'typeorm';

@Entity('producer')
export class Producer {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  document?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  tel?: string;

  @OneToOne(() => Sales, (sales) => sales.producer)
  sales: Sales;
}
