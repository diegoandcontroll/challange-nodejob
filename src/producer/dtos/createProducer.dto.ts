import { IsString } from 'class-validator';

export class createProducerDto {
  readonly id?: string;

  @IsString()
  name?: string;

  @IsString()
  document?: string;

  @IsString()
  email?: string;

  @IsString()
  tel?: string;
}
