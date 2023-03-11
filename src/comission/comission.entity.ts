import { CmList } from 'src/comissionList/cmlist.entity';
import { ProductCm } from 'src/productComission/productcm.entity';
import { Entity, PrimaryColumn, Generated, OneToMany } from 'typeorm';

@Entity('comission')
export class Comission {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @OneToMany(() => CmList, (cmlist) => cmlist.comission)
  comissions_list: CmList[];

  @OneToMany(() => ProductCm, (productCm) => productCm.comission)
  co_production_commission: ProductCm[];
}
