import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { createTrDto } from './dtos/createTr.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class IdentificationController {
  constructor(private readonly trService: TransactionService) {}

  @Get()
  async getSales() {
    return await this.trService.getTransactions();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createIden(@Body() createTr: createTrDto) {
    return await this.trService.create(createTr);
  }
}
