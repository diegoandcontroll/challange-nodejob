import { forwardRef, Module } from '@nestjs/common';
import { CmListModule } from 'src/comissionList/cmlist.module';
import { cmListProviders } from 'src/comissionList/cmlist.provider';

import { DbModule } from 'src/db/db.module';
import { ProductCmModule } from 'src/productComission/productcm.module';
import { ComissionController } from './comission.controller';
import { comissionProviders } from './comission.provider';
import { ComissionService } from './comission.service';

@Module({
  imports: [DbModule, CmListModule, ProductCmModule],
  controllers: [ComissionController],
  providers: [ComissionService, ...comissionProviders],
  exports: [ComissionService, ...comissionProviders],
})
export class ComissionModule {}
