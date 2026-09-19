import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import classnames from 'classnames';
import { getOrders } from '@/services/order';
import { Order, OrderStatus } from '@/types/order';
import styles from './index.module.scss';

type FilterKey = 'all' | OrderStatus;

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '进行中' },
  { key: 'completed', label: '已完成' },
  { key: 'cancelled', label: '已取消' },
];

const statusText: Record<OrderStatus, string> = {
  pending: '进行中',
  completed: '已完成',
  cancelled: '已取消',
};

function formatTime(ts: number): string {
  const d = new Date(ts);
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const OrderPage: React.FC = () => {
  const [active, setActive] = useState<FilterKey>('all');
  const [orders, setOrders] = useState<Order[]>([]);

  const load = useCallback(async (key: FilterKey) => {
    try {
      const status = key === 'all' ? undefined : key;
      const res = await getOrders(status);
      setOrders(res.orders);
    } catch (err) {
      console.error('[OrderPage] load orders failed:', err);
      Taro.showToast({ title: '加载订单失败', icon: 'none' });
    }
  }, []);

  useDidShow(() => {
    load(active);
  });

  const handleFilter = (key: FilterKey) => {
    setActive(key);
    load(key);
  };

  return (
    <View className={styles.page}>
      <View className={styles.filters}>
        {filters.map((f) => (
          <View
            key={f.key}
            className={classnames(styles.filterItem, active === f.key && styles.filterItemActive)}
            onClick={() => handleFilter(f.key)}
          >
            <Text className={classnames(styles.filterText, active === f.key && styles.filterTextActive)}>
              {f.label}
            </Text>
          </View>
        ))}
      </View>

      <ScrollView scrollY className={styles.list}>
        {orders.length === 0 ? (
          <View className={styles.empty}>
            <Text className={styles.emptyText}>暂无订单</Text>
          </View>
        ) : (
          orders.map((order) => (
            <View key={order.id} className={styles.orderCard}>
              <View className={styles.orderHeader}>
                <Text className={styles.orderNo}>{order.orderNo}</Text>
                <Text
                  className={classnames(
                    styles.orderStatus,
                    order.status === 'pending' && styles.statusPending,
                    order.status === 'completed' && styles.statusCompleted,
                    order.status === 'cancelled' && styles.statusCancelled
                  )}
                >
                  {statusText[order.status]}
                </Text>
              </View>
              <View className={styles.orderBody}>
                {order.items.map((item) => (
                  <View key={item.dishId} className={styles.orderItem}>
                    <Text className={styles.orderItemName}>{item.name}</Text>
                    <Text className={styles.orderItemQty}>x{item.quantity}</Text>
                    <Text className={styles.orderItemPrice}>¥{item.price}</Text>
                  </View>
                ))}
              </View>
              <View className={styles.orderFooter}>
                <Text className={styles.tableNo}>桌号 {order.tableNo}</Text>
                <View className={styles.orderTotalWrap}>
                  <Text className={styles.orderTotalLabel}>合计</Text>
                  <Text className={styles.orderTotalPrice}>¥{order.totalPrice}</Text>
                </View>
              </View>
              <Text className={styles.orderTime}>{formatTime(order.createTime)}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default OrderPage;