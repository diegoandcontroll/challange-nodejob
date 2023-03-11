import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductCm } from './productcm.entity';

@Injectable()
export class ProductCmService {
  constructor(
    @Inject('PCM_REPOSITORY')
    private productCmRepository: Repository<ProductCm>,
  ) {}

  async getProductCm() {
    const productCm = await this.productCmRepository.find();
    return { productCm };
  }
}
