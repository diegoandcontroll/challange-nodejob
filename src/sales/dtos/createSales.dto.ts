import { IsOptional, IsString } from 'class-validator';
import { Comission } from 'src/comission/comission.entity';
import { createCmListDto } from 'src/comissionList/dtos/createCmList.dto';
import { Customer } from 'src/customer/customer.entity';
import { Identification } from 'src/identification/iden.entity';
import { Meta } from 'src/metadata/meta.entity';
import { Producer } from 'src/producer/producer.entity';
import { Product } from 'src/products/product.entity';
import { Transaction } from 'src/transaction/transaction.entity';

export class createSalesDto {
  readonly id?: string;

  @IsOptional()
  identification?: Identification;

  @IsOptional()
  transaction?: Transaction;

  @IsOptional()
  product?: Product;

  @IsOptional()
  producer?: Producer;

  @IsOptional()
  customer?: Customer;

  @IsOptional()
  comission?: Comission;

  @IsOptional()
  metadata?: Meta;
}

export class IRequest {
  @IsString()
  client_id: string;

  @IsString()
  client_secret: string;

  @IsString()
  token: string;
}
