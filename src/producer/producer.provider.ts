import { DataSource } from 'typeorm';
import { Producer } from './producer.entity';

export const producerProviders = [
  {
    provide: 'PR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Producer),
    inject: ['DATA_SOURCE'],
  },
];
