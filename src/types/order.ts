export type OrderStatus = 'pending' | 'completed' | 'cancelled';

export interface OrderItem {
  dishId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  orderNo: string;
  tableNo: string;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  createTime: number;
}