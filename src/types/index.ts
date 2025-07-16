// src/types/index.ts

export type Product = {
  name: string;
  mainImage: string;
  extraImages: string[];
  price: string;
  promoPrice: string;
  category: 'grau' | 'solar';
};