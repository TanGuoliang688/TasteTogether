import { callFunction } from './cloud';
import { Order, OrderItem, OrderStatus } from '@/types/order';

interface CreateOrderParams {
  items: OrderItem[];
  tableNo: string;
  totalPrice: number;
}

export function createOrder(data: CreateOrderParams) {
  return callFunction<{ orderId: string }>('createOrder', data);
}

export function getOrders(status?: OrderStatus) {
  return callFunction<{ orders: Order[] }>('getOrders', status ? { status } : {});
}