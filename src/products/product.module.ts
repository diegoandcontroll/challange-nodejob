import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { SalesController } from './product.controller';

import { productProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
  imports: [DbModule],
  controllers: [SalesController],
  providers: [ProductService, ...productProviders],
  exports: [...productProviders],
})
export class ProductModule {}
