export interface Cart {
  cid: string;
  products: Array<Product>;
}

export interface Product {
  id: number;
  qty: number;
}

export interface DisplayCart {
  id: number;
  name: string;
  price: number;
  currency: string;
  qty: number;
  inStock: boolean;
  color: string;
}
