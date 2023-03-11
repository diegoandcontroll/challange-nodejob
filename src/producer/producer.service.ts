import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Producer } from './producer.entity';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('PR_REPOSITORY')
    private producerRepository: Repository<Producer>,
  ) {}

  async getProducer() {
    const producers = await this.producerRepository.find();
    return { producers };
  }
}
