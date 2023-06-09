import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { Axios } from 'axios';
import { productBdProviders } from 'src/bundleProducts/sales.provider';
import { comissionProviders } from 'src/comission/comission.provider';
import { cmListProviders } from 'src/comissionList/cmlist.provider';
import { customerProviders } from 'src/customer/customer.provider';

import { DbModule } from 'src/db/db.module';
import { idenProviders } from 'src/identification/iden.provider';
import { metaProviders } from 'src/metadata/meta.provider';
import { producerProviders } from 'src/producer/producer.provider';
import { productCmProviders } from 'src/productComission/productcm.provider';
import { productProviders } from 'src/products/product.provider';
import { trProviders } from 'src/transaction/transaction.provider';
import { SalesController } from './sales.controller';

import { salesProviders } from './sales.provider';
import { SalesService } from './sales.service';
@Module({
  imports: [DbModule, HttpModule],
  controllers: [SalesController],
  providers: [
    SalesService,
    ...salesProviders,
    ...comissionProviders,
    ...idenProviders,
    ...trProviders,
    ...producerProviders,
    ...customerProviders,
    ...cmListProviders,
    ...productCmProviders,
    ...metaProviders,
    ...productProviders,
    ...productBdProviders,
  ],
})
export class SalesModule {}
