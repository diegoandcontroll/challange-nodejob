import { IsString } from 'class-validator';

export class createMetaDto {
  readonly id?: string;

  @IsString()
  affiliate_id?: string;

  @IsString()
  utm_source?: string;

  @IsString()
  utm_medium?: string;

  @IsString()
  utm_campaign?: string;
}
