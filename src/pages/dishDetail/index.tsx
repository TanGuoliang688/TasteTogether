import React, { useEffect, useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import QuantityStepper from '@/components/QuantityStepper';
import { getMenu } from '@/services/menu';
import { Dish } from '@/types/menu';
import { useCartStore } from '@/store/cart';
import styles from './index.module.scss';

const DishDetailPage: React.FC = () => {
  const router = useRouter();
  const [dish, setDish] = useState<Dish | null>(null);
  const [qty, setQty] = useState(1);
  const addItemWithQuantity = useCartStore((s) => s.addItemWithQuantity);

  const dishId = router.params.id;

  useEffect(() => {
    if (!dishId) return;
    getMenu()
      .then((res) => {
        const found = res.dishes.find((d) => d.id === dishId);
        if (found) setDish(found);
      })
      .catch((err) => {
        console.error('[DishDetailPage] load dish failed:', err);
      });
  }, [dishId]);

  const handleAdd = () => {
    if (!dish) return;
    addItemWithQuantity(dish, qty);
    Taro.showToast({ title: '已加入购物车', icon: 'success' });
    setTimeout(() => Taro.navigateBack(), 1200);
  };

  if (!dish) {
    return (
      <View className={styles.loading}>
        <Text className={styles.loadingText}>加载中...</Text>
      </View>
    );
  }

  return (
    <View className={styles.page}>
      <Image className={styles.image} src={dish.image} mode="aspectFill" />
      <View className={styles.body}>
        <View className={styles.titleRow}>
          <Text className={styles.name}>{dish.name}</Text>
          <View className={styles.priceWrap}>
            <Text className={styles.priceSymbol}>¥</Text>
            <Text className={styles.price}>{dish.price}</Text>
          </View>
        </View>
        {dish.tags && dish.tags.length > 0 && (
          <View className={styles.tags}>
            {dish.tags.map((tag) => (
              <Text key={tag} className={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        )}
        <Text className={styles.desc}>{dish.description}</Text>
        <Text className={styles.sales}>月售 {dish.sales} 份</Text>
      </View>

      <View className={styles.footer}>
        <View className={styles.qtyBox}>
          <Text className={styles.qtyLabel}>数量</Text>
          <QuantityStepper
            value={qty}
            onDecrease={() => setQty((n) => Math.max(1, n - 1))}
            onIncrease={() => setQty((n) => n + 1)}
          />
        </View>
        <View className={styles.addBtn} onClick={handleAdd}>
          <Text className={styles.addText}>加入购物车</Text>
        </View>
      </View>
    </View>
  );
};

export default DishDetailPage;