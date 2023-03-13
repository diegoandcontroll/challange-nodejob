import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { createSalesDto, IRequest } from './dtos/createSales.dto';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  @Get()
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 100,
  ): Promise<Pagination<Sales>> {
    limit = limit > 100 ? 100 : limit;
    return this.salesService.paginate({ page, limit });
  }
  @Get('history/v2')
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

  @Get('populate')
  async populate() {
    return await this.salesService.populate();
  }
}
