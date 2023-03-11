import { IsString } from 'class-validator';

export class createCmListDto {
  readonly id?: string;
  @IsString()
  title?: string;
}
