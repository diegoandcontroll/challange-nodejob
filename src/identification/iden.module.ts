import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { IdentificationController } from './iden.controller';

import { idenProviders } from './iden.provider';
import { IdentificationService } from './iden.service';

@Module({
  imports: [DbModule],
  controllers: [IdentificationController],
  providers: [IdentificationService, ...idenProviders],
})
export class IdenModule {}
