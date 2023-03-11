import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComissionModule } from './comission/comission.module';
import { CmListModule } from './comissionList/cmlist.module';
import { CustomerModule } from './customer/customer.module';
import { DbModule } from './db/db.module';
import { IdenModule } from './identification/iden.module';
import { MetadataModule } from './metadata/meta.module';
import { ProducerModule } from './producer/producer.module';
import { ProductCmModule } from './productComission/productcm.module';
import { SalesModule } from './sales/sales.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DbModule,
    SalesModule,
    IdenModule,
    TransactionModule,
    ProducerModule,
    MetadataModule,
    CustomerModule,
    ComissionModule,
    CmListModule,
    ProductCmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
