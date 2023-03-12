import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ProducerController } from './producer.controller';

import { producerProviders } from './producer.provider';
import { ProducerService } from './producer.service';

@Module({
  imports: [DbModule],
  controllers: [ProducerController],
  providers: [ProducerService, ...producerProviders],
  exports: [ProducerService, ...producerProviders],
})
export class ProducerModule {}
