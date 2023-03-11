import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { CmListController } from './cmlist.controller';

import { cmListProviders } from './cmlist.provider';
import { CmListService } from './cmlist.service';

@Module({
  imports: [DbModule],
  controllers: [CmListController],
  providers: [CmListService, ...cmListProviders],
})
export class CmListModule {}
