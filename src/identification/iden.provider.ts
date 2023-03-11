import { DataSource } from 'typeorm';
import { Identification } from './iden.entity';

export const idenProviders = [
  {
    provide: 'IDEN_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Identification),
    inject: ['DATA_SOURCE'],
  },
];
