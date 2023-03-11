import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity';

@Injectable()
export class SalesService {
  constructor(
    @Inject('SALES_REPOSITORY')
    private salesRepository: Repository<Sales>,
  ) {}

  async getSales() {
    const sales = await this.salesRepository.find({
      relations: { identification: true },
    });
    return { sales };
  }
}
