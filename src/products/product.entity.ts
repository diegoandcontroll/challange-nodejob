import { Sales } from 'src/sales/sales.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  Generated,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ProuctBundle } from '../bundleProducts/sales.entity';
@Entity('product')
export class Product {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  quantity: string;

  @Column({ nullable: true })
  price: string;

  @OneToMany(() => ProuctBundle, (p) => p.product, {
    eager: true,
    cascade: true,
  })
  bundles: ProuctBundle[];

  @OneToOne(() => Sales, (sales) => sales.product)
  sales: Sales;
}
