import { saveOrder } from './orderStore';
import { Order, OrderItem } from '@/types/order';

interface CreateOrderParams {
  items: OrderItem[];
  tableNo: string;
  totalPrice: number;
}

export default function createOrder(data: CreateOrderParams) {
  const order: Order = {
    id: `o_${Date.now()}`,
    orderNo: `NO${Date.now()}`,
    tableNo: data.tableNo || 'A01',
    items: data.items,
    totalPrice: data.totalPrice,
    status: 'pending',
    createTime: Date.now(),
  };
  saveOrder(order);
  return { orderId: order.id };
}