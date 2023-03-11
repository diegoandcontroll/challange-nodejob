import { DataSource } from 'typeorm';
import { CmList } from './cmlist.entity';

export const cmListProviders = [
  {
    provide: 'CML_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CmList),
    inject: ['DATA_SOURCE'],
  },
];
