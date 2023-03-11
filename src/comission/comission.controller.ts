import { Controller, Get } from '@nestjs/common';
import { ComissionService } from './comission.service';

@Controller('comission')
export class ComissionController {
  constructor(private readonly comissionService: ComissionService) {}

  @Get()
  async getSales() {
    return await this.comissionService.getComissions();
  }
}
