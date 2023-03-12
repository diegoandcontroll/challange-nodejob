import { Inject, Injectable } from '@nestjs/common';
import { Comission } from 'src/comission/comission.entity';
import { CmList } from 'src/comissionList/cmlist.entity';
import { Customer } from 'src/customer/customer.entity';
import { customerProviders } from 'src/customer/customer.provider';
import { Identification } from 'src/identification/iden.entity';
import { Meta } from 'src/metadata/meta.entity';
import { Producer } from 'src/producer/producer.entity';
import { ProductCm } from 'src/productComission/productcm.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import { Repository } from 'typeorm';
import { createSalesDto } from './dtos/createSales.dto';
import { Sales } from './sales.entity';
@Injectable()
export class SalesService {
  constructor(
    @Inject('SALES_REPOSITORY')
    private salesRepository: Repository<Sales>,

    @Inject('COMISSION_REPOSITORY')
    private comissionRepository: Repository<Comission>,

    @Inject('IDEN_REPOSITORY')
    private idenRepository: Repository<Identification>,

    @Inject('TR_REPOSITORY')
    private trRepository: Repository<Transaction>,

    @Inject('PR_REPOSITORY')
    private producerRepository: Repository<Producer>,

    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<Customer>,

    @Inject('CML_REPOSITORY')
    private cmListRepository: Repository<CmList>,

    @Inject('PCM_REPOSITORY')
    private productCmRepository: Repository<ProductCm>,

    @Inject('META_REPOSITORY')
    private metaRepository: Repository<Meta>,
  ) {}

  async getSales() {
    const sales = await this.salesRepository.find({
      relations: {
        identification: true,
        transaction: true,
        producer: true,
        customer: true,
        comission: true,
        metadata: true,
      },
    });
    return {
      sales,
    };
  }

  async create(create: createSalesDto) {
    const sale = new Sales();
    const identification = new Identification();
    const transaction = new Transaction();
    const producer = new Producer();
    const customer = new Customer();
    const cmlist = new CmList();
    const productcm = new ProductCm();
    const comission = new Comission();
    const metadata = new Meta();
    const titleCmList = create.comission.comissions_list.map((item) => {
      return item.title;
    });
    const titleProduct = create.comission.co_production_commission.map(
      (item) => {
        return item.title;
      },
    );
    cmlist.title = titleCmList.toString();
    productcm.title = titleProduct.toString();

    comission.comissions_list?.map((item) => {
      return (item.title = titleCmList.toString());
    });
    comission.co_production_commission?.map((item) => {
      return (item.title = titleProduct.toString());
    });

    identification.data_source = create.identification?.data_source;
    identification.order_id = create.identification.order_id
      ? create.identification.order_id
      : null;
    const {
      value,
      billet_url,
      freight,
      freight_type,
      status,
      pix_url,
      discount_value,
      payment_type,
    } = create.transaction;

    transaction.value = value;
    transaction.billet_url = billet_url;
    transaction.freight = freight;
    transaction.freight_type = freight_type;
    transaction.status = status;
    transaction.pix_url = pix_url;
    transaction.discount_value = discount_value;
    transaction.payment_type = payment_type;

    const { document, email, name, tel } = create.producer;

    producer.document = document;
    producer.email = email;
    producer.name = name;
    producer.tel = tel;

    customer.document = create.customer?.document;
    customer.email = create.customer?.email;
    customer.name = create.customer?.email;
    customer.telephone = create.customer?.telephone;

    metadata.affiliate_id = create.metadata.affiliate_id;
    metadata.utm_campaign = create.metadata.utm_campaign;
    metadata.utm_medium = create.metadata.utm_medium;
    metadata.utm_source = create.metadata.utm_source;

    sale.customer = customer;
    sale.producer = producer;
    sale.transaction = transaction;
    sale.identification = identification;
    sale.comission = comission;
    sale.metadata = metadata;

    await this.cmListRepository.save(cmlist);
    await this.productCmRepository.save(productcm);
    await this.comissionRepository.save(comission);
    await this.customerRepository.save(customer);
    await this.producerRepository.save(producer);
    await this.trRepository.save(transaction);
    await this.idenRepository.save(identification);
    await this.metaRepository.save(metadata);
    await this.salesRepository.save(sale);
    return sale;
  }
}
