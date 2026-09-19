import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import QuantityStepper from '@/components/QuantityStepper';
import { Dish } from '@/types/menu';
import { useCartStore } from '@/store/cart';
import styles from './index.module.scss';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const items = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);

  const count = items.find((i) => i.dishId === dish.id)?.quantity ?? 0;
  const soldOut = !!dish.soldOut;

  const handleOpen = () => {
    Taro.navigateTo({ url: `/pages/dishDetail/index?id=${dish.id}` });
  };

  return (
    <View className={styles.card} onClick={handleOpen}>
      <View className={styles.imageWrap}>
        <Image className={styles.image} src={dish.image} mode="aspectFill" />
        {soldOut && (
          <View className={styles.soldOutMask}>
            <Text className={styles.soldOutText}>售罄</Text>
          </View>
        )}
      </View>
      <View className={styles.info}>
        <Text className={styles.name}>{dish.name}</Text>
        <Text className={styles.desc}>{dish.description}</Text>
        {dish.tags && dish.tags.length > 0 && (
          <View className={styles.tags}>
            {dish.tags.map((tag) => (
              <Text key={tag} className={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        )}
        <View className={styles.bottom}>
          <View className={styles.priceWrap}>
            <Text className={styles.priceSymbol}>¥</Text>
            <Text className={styles.price}>{dish.price}</Text>
            <Text className={styles.sales}>已售 {dish.sales}</Text>
          </View>
          <View className={styles.control} onClick={(e) => e.stopPropagation()}>
            {soldOut ? (
              <View className={styles.soldOutBtn}>
                <Text className={styles.soldOutBtnText}>售罄</Text>
              </View>
            ) : count === 0 ? (
              <View className={styles.addBtn} onClick={() => addItem(dish)}>
                <Text className={styles.addText}>+</Text>
              </View>
            ) : (
              <QuantityStepper
                value={count}
                onDecrease={() => decrease(dish.id)}
                onIncrease={() => increase(dish.id)}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;