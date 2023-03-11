import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { SalesController } from './sales.controller';

import { salesProviders } from './sales.provider';
import { SalesService } from './sales.service';

@Module({
  imports: [DbModule],
  controllers: [SalesController],
  providers: [SalesService, ...salesProviders],
})
export class SalesModule {}
