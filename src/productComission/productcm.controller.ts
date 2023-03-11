import { Controller, Get } from '@nestjs/common';
import { ProductCmService } from './productcm.service';

@Controller('productcm')
export class ProductCmController {
  constructor(private readonly productCmService: ProductCmService) {}

  @Get()
  async getProductCm() {
    return await this.productCmService.getProductCm();
  }
}
