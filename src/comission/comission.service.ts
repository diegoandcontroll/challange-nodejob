import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CmList } from 'src/comissionList/cmlist.entity';
import { CmListService } from 'src/comissionList/cmlist.service';
import { ProductCm } from 'src/productComission/productcm.entity';
import { ProductCmService } from 'src/productComission/productcm.service';
import { Repository } from 'typeorm';
import { Comission } from './comission.entity';
import { createComissionDto } from './dtos/createComission.dto';

@Injectable()
export class ComissionService {
  constructor(
    @Inject('COMISSION_REPOSITORY')
    private comissionRepository: Repository<Comission>,

    @Inject(forwardRef(() => CmListService))
    private cmListService: CmListService,

    @Inject(forwardRef(() => ProductCmService))
    private productCmService: ProductCmService,
  ) {}

  async getComissions() {
    const comissions = await this.comissionRepository.find({
      relations: { co_production_commission: true, comissions_list: true },
    });
    return { comissions };
  }

  async create(createComissionDto: createComissionDto): Promise<Comission> {
    const comissionList = new CmList();
    const productCm = new ProductCm();

    const titleDto = createComissionDto.comissions_list.map(
      (item) => item.title,
    );

    const titleProduct = createComissionDto.co_production_commission.map(
      (item) => item.title,
    );

    comissionList.title = `${titleDto}`;

    productCm.title = `${titleProduct}`;

    await this.cmListService.create(comissionList);

    await this.productCmService.create(productCm);

    const comission = new Comission();

    comission.comissions_list?.push(comissionList);
    comission.co_production_commission?.push(productCm);

    return await this.comissionRepository.save(comission);
  }
}
