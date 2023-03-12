import { CmList } from 'src/comissionList/cmlist.entity';
import { ProductCm } from 'src/productComission/productcm.entity';
import { Sales } from 'src/sales/sales.entity';
import { Entity, PrimaryColumn, Generated, OneToMany, OneToOne } from 'typeorm';

@Entity('comission')
export class Comission {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @OneToMany(() => CmList, (cmlist) => cmlist.comission, {
    eager: true,
    cascade: true,
  })
  comissions_list?: CmList[];

  @OneToMany(() => ProductCm, (productCm) => productCm.comission, {
    eager: true,
    cascade: true,
  })
  co_production_commission?: ProductCm[];

  @OneToOne(() => Sales, (sales) => sales.comission)
  sales: Sales;
}
