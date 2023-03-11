import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CmList } from './cmlist.entity';

@Injectable()
export class CmListService {
  constructor(
    @Inject('CML_REPOSITORY')
    private cmListRepository: Repository<CmList>,
  ) {}

  async getCmList() {
    const cmlist = await this.cmListRepository.find();
    return { cmlist };
  }
}
