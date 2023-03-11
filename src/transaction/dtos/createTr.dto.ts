/* eslint-disable @typescript-eslint/ban-types */
import { IsNumber, IsString } from 'class-validator';

export class createTrDto {
  @IsString()
  readonly id?: string;

  @IsString()
  status?: string;

  @IsString()
  createdAt?: string;

  @IsString()
  updatedAt?: string;

  @IsNumber()
  value?: number;

  @IsNumber()
  discount_value?: number;

  @IsNumber()
  freight?: number;

  @IsString()
  freight_type?: string;

  @IsString()
  payment_type?: string;

  @IsString()
  payment_card_brand?: string;

  @IsString()
  payment_line?: string;

  @IsString()
  payment_bar_code?: string;

  @IsString()
  payment_url?: string;

  @IsString()
  billet_url?: string;

  @IsString()
  pix_qrcode?: string;

  @IsString()
  pix_emv?: string;

  @IsString()
  pix_ref?: string;

  @IsString()
  pix_expiration_date?: string;

  @IsString()
  pix_creation_date?: string;

  @IsString()
  pix_url?: string;

  @IsString()
  is_upsell?: string;
}
