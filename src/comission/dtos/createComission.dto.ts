import { CmList } from 'src/comissionList/cmlist.entity';
import { ProductCm } from 'src/productComission/productcm.entity';
import { IsOptional } from 'class-validator';

export class createComissionDto {
  readonly id?: string;

  @IsOptional()
  comissions_list?: CmList[];

  @IsOptional()
  co_production_commission?: ProductCm[];
}
