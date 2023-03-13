import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ProuctBundleController } from './sales.controller';

import { productBdProviders } from './sales.provider';
import { ProuctBundleService } from './sales.service';

@Module({
  imports: [DbModule],
  controllers: [ProuctBundleController],
  providers: [ProuctBundleService, ...productBdProviders],
  exports: [...productBdProviders],
})
export class ProuctBundleModule {}
