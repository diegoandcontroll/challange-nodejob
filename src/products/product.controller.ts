import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: ProductService) {}

  @Get()
  async getSales() {
    return await this.salesService.getSales();
  }
}
