import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CmListService } from './cmlist.service';
import { createCmListDto } from './dtos/createCmList.dto';

@Controller('cmlist')
export class CmListController {
  constructor(private readonly cmListService: CmListService) {}

  @Get()
  async getCmList() {
    return await this.cmListService.getCmList();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createIden(@Body() createCmList: createCmListDto) {
    return await this.cmListService.create(createCmList);
  }
}
