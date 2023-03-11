import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { createIdenDto } from './dtos/createIden.dto';
import { Identification } from './iden.entity';

@Injectable()
export class IdentificationService {
  constructor(
    @Inject('IDEN_REPOSITORY')
    private idenRepository: Repository<Identification>,
  ) {}

  async getIdens() {
    const idens = await this.idenRepository.find({
      relations: { sales: true },
    });
    return { identificators: idens };
  }
  async create(data: createIdenDto): Promise<Identification> {
    return await this.idenRepository.save(data);
  }
}
