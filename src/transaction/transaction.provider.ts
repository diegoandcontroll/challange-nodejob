import { DataSource } from 'typeorm';
import { Transaction } from './transaction.entity';

export const trProviders = [
  {
    provide: 'TR_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Transaction),
    inject: ['DATA_SOURCE'],
  },
];
