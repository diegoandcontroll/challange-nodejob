import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DbModule } from './db/db.module';
import { IdenModule } from './identification/iden.module';
import { MetadataModule } from './metadata/meta.module';
import { ProducerModule } from './producer/producer.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
