import { Order, OrderStatus } from '@/types/order';

let orders: Order[] = [
  {
    id: 'seed_1',
    orderNo: 'NO20260901001',
    tableNo: 'A03',
    items: [
      { dishId: 'd1', name: '招牌红烧肉', price: 48, quantity: 1 },
      { dishId: 'd8', name: '扬州炒饭', price: 22, quantity: 2 },
    ],
    totalPrice: 92,
    status: 'completed',
    createTime: Date.now() - 86400000,
  },
  {
    id: 'seed_2',
    orderNo: 'NO20260902002',
    tableNo: 'B07',
    items: [
      { dishId: 'd4', name: '水煮鱼', price: 58, quantity: 1 },
      { dishId: 'd13', name: '鲜榨橙汁', price: 15, quantity: 2 },
    ],
    totalPrice: 88,
    status: 'pending',
    createTime: Date.now() - 3600000,
  },
];

export function saveOrder(order: Order) {
  orders = [order, ...orders];
}

export function listOrders(status?: OrderStatus): Order[] {
  if (!status) return orders;
  return orders.filter((o) => o.status === status);
}