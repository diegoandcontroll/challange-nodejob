import { Entity, Column, PrimaryColumn, Generated, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
@Entity('product_bundle')
export class ProuctBundle {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  quantity: string;

  @Column()
  price: string;

  @ManyToOne(() => Product, (p) => p.bundles)
  product: Product;
}
