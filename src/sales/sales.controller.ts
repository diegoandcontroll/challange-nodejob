import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { createSalesDto, IRequest } from './dtos/createSales.dto';
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

  @Get('token')
  async token() {
    return await this.salesService.getToken();
  }

  @Get('history')
  async history() {
    return await this.salesService.getData();
  }
}
