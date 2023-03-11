import { Sales } from 'src/sales/sales.entity';
import { Entity, Column, PrimaryColumn, Generated, OneToOne } from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  document: string;

  @OneToOne(() => Sales, (sales) => sales.customer)
  sales: Sales;
}
