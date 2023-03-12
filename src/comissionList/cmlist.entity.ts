import { Comission } from 'src/comission/comission.entity';
import { Entity, Column, PrimaryColumn, Generated, ManyToOne } from 'typeorm';

@Entity('cmList')
export class CmList {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id?: string;

  @Column({ nullable: true })
  title: string;

  @ManyToOne(() => Comission, (cm) => cm.comissions_list)
  comission: Comission;
}
