import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { MetaController } from './meta.controller';

import { metaProviders } from './meta.provider';
import { MetaService } from './meta.service';

@Module({
  imports: [DbModule],
  controllers: [MetaController],
  providers: [MetaService, ...metaProviders],
})
export class MetadataModule {}
