import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { createProductCmDto } from './dtos/productcm.dto';
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

  async create(createProductCm: createProductCmDto) {
    const product = this.productCmRepository.create(createProductCm);

    await this.productCmRepository.save(product);

    return product;
  }
}
