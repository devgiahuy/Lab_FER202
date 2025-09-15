export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
}

export interface CartItem {
  productId: string;
  qty: number;
}
