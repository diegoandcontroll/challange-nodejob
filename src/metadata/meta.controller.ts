import { Controller, Get } from '@nestjs/common';
import { MetaService } from './meta.service';

@Controller('Meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Get()
  async getMeta() {
    return await this.metaService.getMeta();
  }
}
