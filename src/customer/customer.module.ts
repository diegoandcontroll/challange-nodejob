import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { CustomerController } from './customer.controller';

import { customerProviders } from './customer.provider';
import { CustomerService } from './customer.service';

@Module({
  imports: [DbModule],
  controllers: [CustomerController],
  providers: [CustomerService, ...customerProviders],
})
export class CustomerModule {}
