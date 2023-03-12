import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { createProducerDto } from 'src/producer/dtos/createProducer.dto';
import { ProductCmService } from './productcm.service';

@Controller('productcm')
export class ProductCmController {
  constructor(private readonly productCmService: ProductCmService) {}

  @Get()
  async getProductCm() {
    return await this.productCmService.getProductCm();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createIden(@Body() createProducer: createProducerDto) {
    return await this.productCmService.create(createProducer);
  }
}
