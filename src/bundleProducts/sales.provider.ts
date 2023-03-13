import { DataSource } from 'typeorm';
import { ProuctBundle } from './sales.entity';

export const productBdProviders = [
  {
    provide: 'PRODUCTBD_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProuctBundle),
    inject: ['DATA_SOURCE'],
  },
];
