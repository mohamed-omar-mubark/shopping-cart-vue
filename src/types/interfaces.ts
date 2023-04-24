export interface Cart {
  cid: string;
  products: Array<Product>;
}

export interface Product {
  id: number;
  qty: number;
}
