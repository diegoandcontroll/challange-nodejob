import { Controller, Get } from '@nestjs/common';
import { CmListService } from './cmlist.service';

@Controller('cmlist')
export class CmListController {
  constructor(private readonly cmListService: CmListService) {}

  @Get()
  async getCmList() {
    return await this.cmListService.getCmList();
  }
}
