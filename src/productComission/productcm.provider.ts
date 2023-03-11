import { DataSource } from 'typeorm';
import { ProductCm } from './productcm.entity';

export const productCmProviders = [
  {
    provide: 'PCM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductCm),
    inject: ['DATA_SOURCE'],
  },
];
