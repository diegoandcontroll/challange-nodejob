import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Comission } from './comission.entity';

@Injectable()
export class ComissionService {
  constructor(
    @Inject('COMISSION_REPOSITORY')
    private comissionRepository: Repository<Comission>,
  ) {}

  async getComissions() {
    const comissions = await this.comissionRepository.find();
    return { comissions };
  }
}
