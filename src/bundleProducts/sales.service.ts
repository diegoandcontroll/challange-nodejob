import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProuctBundle } from './sales.entity';

@Injectable()
export class ProuctBundleService {
  constructor(
    @Inject('PRODUCTBD_REPOSITORY')
    private salesRepository: Repository<ProuctBundle>,
  ) {}

  async getSales() {
    const sales = await this.salesRepository.find();
    return { sales };
  }
}
