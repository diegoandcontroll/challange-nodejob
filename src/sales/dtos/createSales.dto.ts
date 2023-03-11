/* eslint-disable @typescript-eslint/ban-types */
import { IsObject } from 'class-validator';

export class createMovieDto {
  readonly id?: string;

  @IsObject()
  readonly identification?: {
    data_source: string;
    order_id: string;
  };

  @IsObject()
  readonly transaction?: {
    status?: string;
    created_date?: string;
    updated_date?: string;
    value?: Number;
    discount_value?: Number;
    freight?: Number;
    freight_type?: string;
    payment_type?: string;
    payment_card_brand?: string;
    payment_line?: string;
    payment_bar_code?: string;
    payment_url?: string;
    billet_url?: string;
    pix_qrcode?: string;
    pix_emv?: string;
    pix_ref?: string;
    pix_expiration_date?: string;
    pix_creation_date?: string;
    pix_url?: string;
    is_upsell?: string;
  };

  @IsObject()
  readonly product?: {
    bundles?: [
      {
        id?: string;
        name?: string;
        quantity?: Number;
        price?: Number;
        products?: [
          {
            id?: string;
            name?: string;
            quantity?: Number;
            price?: Number;
          },
        ];
      },
    ];
  };

  @IsObject()
  readonly producer?: {
    name?: string;
    document?: string;
    email?: string;
    tel?: string;
  };

  @IsObject()
  readonly customer?: {
    id: string;
    name: string;
    email: string;
    telephone: string;
    document: string;
  };

  @IsObject()
  readonly comission?: {
    comissions_list: Array<string>;
    co_production_commission: Array<string>;
  };

  @IsObject()
  readonly metadata?: {
    affiliate_id: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
  };
}
