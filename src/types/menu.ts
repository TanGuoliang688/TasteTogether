export interface Category {
  id: string;
  name: string;
  sort: number;
}

export interface Dish {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sales: number;
  tags?: string[];
  onSale?: boolean; // 是否上架
  soldOut?: boolean; // 是否售罄
}