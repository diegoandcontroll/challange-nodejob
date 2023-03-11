import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Meta } from './meta.entity';

@Injectable()
export class MetaService {
  constructor(
    @Inject('META_REPOSITORY')
    private metaRepository: Repository<Meta>,
  ) {}

  async getMeta() {
    const meta = await this.metaRepository.find();
    return { metadata: meta };
  }
}
