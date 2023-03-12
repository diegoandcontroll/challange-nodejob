import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { IdentificationController } from './transaction.controller';

import { trProviders } from './transaction.provider';
import { TransactionService } from './transaction.service';

@Module({
  imports: [DbModule],
  controllers: [IdentificationController],
  providers: [TransactionService, ...trProviders],
  exports: [TransactionService, ...trProviders],
})
export class TransactionModule {}
