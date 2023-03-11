import { IsString } from 'class-validator';

export class createProductCmDto {
  readonly id?: string;

  @IsString()
  title?: string;
}
