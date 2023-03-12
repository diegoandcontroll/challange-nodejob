import { Inject, Injectable } from '@nestjs/common';
import { Comission } from 'src/comission/comission.entity';
import { Repository } from 'typeorm';
import { CmList } from './cmlist.entity';
import { createCmListDto } from './dtos/createCmList.dto';

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
  async create(createCmListDto: createCmListDto) {
    const cmList = this.cmListRepository.create(createCmListDto);
    await this.cmListRepository.save(cmList);
    return cmList;
  }
}
