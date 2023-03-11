import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { SalesController } from './iden.controller';

import { salesProviders } from './iden.provider';
import { SalesService } from './iden.service';

@Module({
  imports: [DbModule],
  controllers: [SalesController],
  providers: [SalesService, ...salesProviders],
})
export class SalesModule {}
