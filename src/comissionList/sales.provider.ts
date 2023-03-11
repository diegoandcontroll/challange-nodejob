import { DataSource } from 'typeorm';
import { Sales } from './sales.entity';

export const salesProviders = [
  {
    provide: 'SALES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sales),
    inject: ['DATA_SOURCE'],
  },
];
