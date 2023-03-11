import { DataSource } from 'typeorm';
import { Comission } from './comission.entity';

export const comissionProviders = [
  {
    provide: 'COMISSION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Comission),
    inject: ['DATA_SOURCE'],
  },
];
