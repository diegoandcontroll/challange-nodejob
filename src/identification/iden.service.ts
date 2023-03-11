import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Identification } from './iden.entity';

@Injectable()
export class IdentificationService {
  constructor(
    @Inject('IDEN_REPOSITORY')
    private idenRepository: Repository<Identification>,
  ) {}

  async getSales() {
    const sales = await this.idenRepository.find();
    return { sales };
  }
}
