import Taro from '@tarojs/taro';
import { Order, OrderStatus } from '@/types/order';

const STORAGE_KEY = '__ORDERS__';

const defaultOrders: Order[] = [
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

function loadOrders(): Order[] {
  try {
    const stored = Taro.getStorageSync(STORAGE_KEY);
    if (stored && Array.isArray(stored)) {
      return stored;
    }
  } catch (e) {
    console.warn('[orderStore] load from storage failed:', e);
  }
  return defaultOrders;
}

function persistOrders(orders: Order[]) {
  try {
    Taro.setStorageSync(STORAGE_KEY, orders);
  } catch (e) {
    console.warn('[orderStore] persist to storage failed:', e);
  }
}

let orders: Order[] = loadOrders();

export function saveOrder(order: Order) {
  orders = [order, ...orders];
  persistOrders(orders);
}

export function listOrders(status?: OrderStatus): Order[] {
  if (!status) return orders;
  return orders.filter((o) => o.status === status);
}