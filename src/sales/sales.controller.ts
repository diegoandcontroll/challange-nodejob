import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { createSalesDto } from './dtos/createSales.dto';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getSales() {
    return await this.salesService.getSales();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createIden(@Body() createSales: createSalesDto) {
    return await this.salesService.create(createSales);
  }
}
