import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ComissionController } from './comission.controller';

import { comissionProviders } from './comission.provider';
import { ComissionService } from './comission.service';

@Module({
  imports: [DbModule],
  controllers: [ComissionController],
  providers: [ComissionService, ...comissionProviders],
})
export class ComissionModule {}
