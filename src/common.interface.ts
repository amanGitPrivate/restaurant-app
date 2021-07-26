export interface selected {
  id: string;
  price: number;
  name: string;
}

export interface handleSelectedItems extends selected{
  action: string;
}

export interface category {
  id: string;
  name: string;
}

export interface menuItem {
  id: string;
  name: string;
  description?: string;
  sku?: string;
  price: number;
  vat_rate: number;
  allergens?: string[];
  display_order: number;
  img_url: string;
}
