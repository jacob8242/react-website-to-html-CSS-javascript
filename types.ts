
export interface ProductOption {
  label: string;
  values: string[];
}

export type ProductCategory = 'tea' | 'coffee' | 'k-cups' | 'merch';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  type: string;
  origin: string;
  notes: string[];
  price: string;
  priceValue: number;
  description: string;
  reviewCount: string;
  productImage: string;
  thumbnail1: string;
  thumbnail2: string;
  rating: number;
  options: ProductOption[];
}
