import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { createTrDto } from './dtos/createTr.dto';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TR_REPOSITORY')
    private trRepository: Repository<Transaction>,
  ) {}

  async getTransactions() {
    const transactions = await this.trRepository.find();
    return { transactions };
  }
  async create(data: createTrDto): Promise<Transaction> {
    return await this.trRepository.save(data);
  }
}
