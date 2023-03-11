export interface Identification {
  data_source: string | null;
  order_id: string | null;
}

export interface Transaction {
  status: string | null;
  created_date: Date | null;
  updated_date: Date | null;
  value: number | null;
  discount_value: number | null;
  freight: number | null;
  freight_type: string | null;
  payment_type: string | null;
  payment_card_brand: string | null;
  payment_line: string | null;
  payment_bar_code: string | null;
  payment_url: string | null;
  billet_url: string | null;
  pix_qrcode: string | null;
  pix_emv: string | null;
  pix_ref: string | null;
  pix_expiration_date: string | null;
  pix_creation_date: string | null;
  pix_url: string | null;
  is_upsell: string | null;
}

export interface Product2 {
  id: string | null;
  name: string | null;
  quantity: number | null;
  price: number | null;
}

export interface Bundle {
  id: string | null;
  name: string | null;
  quantity: number | null;
  price: number | null;
  products: Product2[] | null;
}

export interface Product {
  bundles: Bundle[] | null;
}

export interface Producer {
  name: string | null;
  document: string | null;
  email: string | null;
  tel: string | null;
}

export interface Customer {
  id: string | null;
  name: string | null;
  email: string | null;
  telephone: string | null;
  document: string | null;
}

export interface Comission {
  comissions_list: any[] | null;
  co_production_commission: any[] | null;
}

export interface Metadata {
  affiliate_id: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
}

export interface RootObject {
  identification: Identification;
  transaction: Transaction;
  product: Product;
  producer: Producer;
  customer: Customer;
  comission: Comission;
  metadata: Metadata;
}
