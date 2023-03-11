/* eslint-disable @typescript-eslint/ban-types */
import { IsString } from 'class-validator';

export class createIdenDto {
  readonly id?: string;

  @IsString()
  readonly data_source?: string;

  @IsString()
  readonly order_id?: string;
}
