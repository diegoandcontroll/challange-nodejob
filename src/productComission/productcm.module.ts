import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ProductCmController } from './productcm.controller';

import { productCmProviders } from './productcm.provider';
import { ProductCmService } from './productcm.service';

@Module({
  imports: [DbModule],
  controllers: [ProductCmController],
  providers: [ProductCmService, ...productCmProviders],
})
export class ProductCmModule {}
