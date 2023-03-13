import { Controller, Get } from '@nestjs/common';
import { ProuctBundleService } from './sales.service';

@Controller('productbd')
export class ProuctBundleController {
  constructor(private readonly productBdService: ProuctBundleService) {}

  @Get()
  async getSales() {
    return await this.productBdService.getSales();
  }
}
