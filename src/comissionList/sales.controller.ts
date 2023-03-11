import { Controller, Get } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getSales() {
    return await this.salesService.getSales();
  }
}
