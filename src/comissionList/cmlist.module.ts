import { forwardRef, Module } from '@nestjs/common';
import { ComissionModule } from 'src/comission/comission.module';
import { comissionProviders } from 'src/comission/comission.provider';
import { DbModule } from 'src/db/db.module';

import { CmListController } from './cmlist.controller';

import { cmListProviders } from './cmlist.provider';
import { CmListService } from './cmlist.service';

@Module({
  imports: [DbModule],
  controllers: [CmListController],
  providers: [CmListService, ...cmListProviders],
  exports: [CmListService, ...cmListProviders],
})
export class CmListModule {}
