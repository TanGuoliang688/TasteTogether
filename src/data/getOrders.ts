import { listOrders } from './orderStore';
import { OrderStatus } from '@/types/order';

export default function getOrders(data?: { status?: OrderStatus }) {
  return { orders: listOrders(data?.status) };
}