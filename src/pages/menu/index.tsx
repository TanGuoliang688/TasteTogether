import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import DishCard from '@/components/DishCard';
import QuantityStepper from '@/components/QuantityStepper';
import { getMenu } from '@/services/menu';
import { createOrder } from '@/services/order';
import { Category, Dish } from '@/types/menu';
import { useCartStore, cartTotal, cartCount } from '@/store/cart';
import styles from './index.module.scss';

const banners = [
  { id: 1, image: 'https://picsum.photos/id/292/750/400', title: '招牌热菜 火热上市' },
  { id: 2, image: 'https://picsum.photos/id/326/750/400', title: '春日限定 · 新品尝鲜' },
  { id: 3, image: 'https://picsum.photos/id/401/750/400', title: '会员专享 每日特惠' },
];

const MenuPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const items = useCartStore((s) => s.items);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const clear = useCartStore((s) => s.clear);

  const totalPrice = cartTotal(items);
  const totalCount = cartCount(items);

  useEffect(() => {
    getMenu()
      .then((res) => {
        setCategories(res.categories);
        setDishes(res.dishes);
        if (res.categories.length > 0 && !activeCategoryId) {
          setActiveCategoryId(res.categories[0].id);
        }
      })
      .catch((err) => {
        console.error('[MenuPage] load menu failed:', err);
        Taro.showToast({ title: '加载菜单失败', icon: 'none' });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredDishes = useMemo(() => {
    const onSaleDishes = dishes.filter((d) => d.onSale !== false);
    if (!activeCategoryId) return onSaleDishes;
    return onSaleDishes.filter((d) => d.categoryId === activeCategoryId);
  }, [dishes, activeCategoryId]);

  const handleChooseCategory = (id: string) => {
    setActiveCategoryId(id);
  };

  const handleCheckout = async () => {
    if (items.length === 0 || submitting) return;
    setSubmitting(true);
    try {
      const orderItems = items.map((i) => ({
        dishId: i.dishId,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      }));
      await createOrder({ items: orderItems, tableNo: 'A01', totalPrice });
      clear();
      setDrawerVisible(false);
      Taro.showToast({ title: '下单成功', icon: 'success' });
      setTimeout(() => {
        Taro.switchTab({ url: '/pages/order/index' });
      }, 1200);
    } catch (err) {
      console.error('[MenuPage] checkout failed:', err);
      Taro.showToast({ title: '下单失败，请重试', icon: 'none' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.headerTop}>
          <View>
            <Text className={styles.shopName}>味来小馆</Text>
            <Text className={styles.tableInfo}>桌号 A01 · 2 位用餐</Text>
          </View>
          <View className={styles.headerBadge}>
            <Text className={styles.headerBadgeText}>{totalCount}</Text>
          </View>
        </View>
      </View>

      <Swiper
        className={styles.banner}
        circular
        autoplay
        indicatorDots
        indicatorColor="rgba(255,255,255,0.4)"
        indicatorActiveColor="#ffffff"
        interval={4000}
      >
        {banners.map((b) => (
          <SwiperItem key={b.id} className={styles.bannerItem}>
            <Image className={styles.bannerImage} src={b.image} mode="aspectFill" />
            <View className={styles.bannerMask} />
            <Text className={styles.bannerTitle}>{b.title}</Text>
          </SwiperItem>
        ))}
      </Swiper>

      <ScrollView scrollX className={styles.categories}>
        {categories.map((c) => (
          <View
            key={c.id}
            className={classnames(styles.categoryItem, c.id === activeCategoryId && styles.categoryItemActive)}
            onClick={() => handleChooseCategory(c.id)}
          >
            <Text className={classnames(styles.categoryText, c.id === activeCategoryId && styles.categoryTextActive)}>
              {c.name}
            </Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView scrollY className={styles.dishList}>
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
        {filteredDishes.length === 0 && (
          <View className={styles.empty}>
            <Text className={styles.emptyText}>暂无菜品</Text>
          </View>
        )}
        <View className={styles.listBottom} />
      </ScrollView>

      {totalCount > 0 && (
        <View className={styles.cartBar} onClick={() => setDrawerVisible(true)}>
          <View className={styles.cartBarLeft}>
            <View className={styles.cartBadge}>
              <Text className={styles.cartBadgeText}>{totalCount}</Text>
            </View>
            <View className={styles.cartPriceWrap}>
              <Text className={styles.cartTotalLabel}>合计</Text>
              <Text className={styles.cartTotal}>¥{totalPrice}</Text>
            </View>
          </View>
          <View className={styles.checkoutBtn} onClick={(e) => { e.stopPropagation(); setDrawerVisible(true); }}>
            <Text className={styles.checkoutText}>去下单</Text>
          </View>
        </View>
      )}

      {drawerVisible && <View className={styles.mask} onClick={() => setDrawerVisible(false)} />}
      <View className={classnames(styles.drawer, drawerVisible && styles.drawerVisible)}>
        <View className={styles.drawerHeader}>
          <Text className={styles.drawerTitle}>已选菜品</Text>
          <View className={styles.clearBtn} onClick={() => clear()}>
            <Text className={styles.clearText}>清空</Text>
          </View>
        </View>
        <ScrollView scrollY className={styles.drawerList}>
          {items.length === 0 ? (
            <View className={styles.drawerEmpty}>
              <Text className={styles.drawerEmptyText}>购物车还是空的</Text>
            </View>
          ) : (
            items.map((item) => (
              <View key={item.dishId} className={styles.drawerItem}>
                <Image className={styles.drawerImage} src={item.image} mode="aspectFill" />
                <View className={styles.drawerItemInfo}>
                  <Text className={styles.drawerItemName}>{item.name}</Text>
                  <Text className={styles.drawerItemPrice}>¥{item.price}</Text>
                </View>
                <QuantityStepper
                  value={item.quantity}
                  onDecrease={() => decrease(item.dishId)}
                  onIncrease={() => increase(item.dishId)}
                />
              </View>
            ))
          )}
        </ScrollView>
        <View className={styles.drawerFooter}>
          <View className={styles.drawerTotal}>
            <Text className={styles.drawerTotalLabel}>合计</Text>
            <Text className={styles.drawerTotalPrice}>¥{totalPrice}</Text>
          </View>
          <View
            className={classnames(styles.submitBtn, (items.length === 0 || submitting) && styles.submitBtnDisabled)}
            onClick={handleCheckout}
          >
            <Text className={styles.submitText}>{submitting ? '下单中...' : '确认下单'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuPage;