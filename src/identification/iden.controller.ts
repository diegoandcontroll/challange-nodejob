import { Controller, Get } from '@nestjs/common';
import { IdentificationService } from './iden.service';

@Controller('sales')
export class IdentificationController {
  constructor(private readonly idenService: IdentificationService) {}

  @Get()
  async getSales() {
    return await this.idenService.getSales();
  }
}
