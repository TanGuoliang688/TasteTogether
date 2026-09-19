import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { getOrders } from '@/services/order';
import styles from './index.module.scss';

interface MenuItem {
  id: number;
  title: string;
  desc: string;
  url?: string;
}

const menuItems: MenuItem[] = [
  { id: 1, title: '菜单管理', desc: '新增、编辑、删除菜品', url: '/pages/dishManage/index' },
  { id: 2, title: '我的优惠券', desc: '查看可用优惠券' },
  { id: 3, title: '联系商家', desc: '电话或在线咨询' },
  { id: 4, title: '关于我们', desc: '了解味来小馆' },
];

const MinePage: React.FC = () => {
  const [orderCount, setOrderCount] = useState(0);

  useDidShow(() => {
    getOrders()
      .then((res) => setOrderCount(res.orders.length))
      .catch((err) => console.error('[MinePage] load order count failed:', err));
  });

  const handleItem = (item: MenuItem) => {
    if (item.url) {
      Taro.navigateTo({ url: item.url });
    } else {
      Taro.showToast({ title: '功能开发中', icon: 'none' });
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.userCard}>
        <Image className={styles.avatar} src="https://picsum.photos/id/338/200/200" mode="aspectFill" />
        <View className={styles.userInfo}>
          <Text className={styles.nickname}>食客</Text>
          <Text className={styles.subtitle}>欢迎光临味来小馆</Text>
        </View>
        <View className={styles.orderCountBox}>
          <Text className={styles.orderCountNum}>{orderCount}</Text>
          <Text className={styles.orderCountLabel}>累计订单</Text>
        </View>
      </View>

      <View className={styles.menuList}>
        {menuItems.map((item) => (
          <View key={item.id} className={styles.menuItem} onClick={() => handleItem(item)}>
            <View className={styles.menuItemInfo}>
              <Text className={styles.menuItemTitle}>{item.title}</Text>
              <Text className={styles.menuItemDesc}>{item.desc}</Text>
            </View>
            <Text className={styles.arrow}>›</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MinePage;