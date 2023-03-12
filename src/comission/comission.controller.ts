import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ComissionService } from './comission.service';
import { createComissionDto } from './dtos/createComission.dto';

@Controller('comission')
export class ComissionController {
  constructor(private readonly comissionService: ComissionService) {}

  @Get()
  async getSales() {
    return await this.comissionService.getComissions();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createIden(@Body() createComission: createComissionDto) {
    return await this.comissionService.create(createComission);
  }
}
