import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { createIdenDto } from './dtos/createIden.dto';
import { IdentificationService } from './iden.service';

@Controller('identificator')
export class IdentificationController {
  constructor(private readonly idenService: IdentificationService) {}

  @Get()
  async getSales() {
    return await this.idenService.getIdens();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createIden(@Body() createIden: createIdenDto) {
    return await this.idenService.create(createIden);
  }
}
