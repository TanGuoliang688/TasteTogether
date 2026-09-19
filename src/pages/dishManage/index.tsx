import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Switch } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { getMenu } from '@/services/menu';
import { deleteDish, updateDishStatus } from '@/services/dish';
import { Category, Dish } from '@/types/menu';
import styles from './index.module.scss';

const DishManagePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);

  const load = async () => {
    try {
      const res = await getMenu();
      setCategories(res.categories);
      setDishes(res.dishes);
    } catch (err) {
      console.error('[DishManagePage] load dishes failed:', err);
      Taro.showToast({ title: '加载菜单失败', icon: 'none' });
    }
  };

  useDidShow(() => {
    load();
  });

  const handleAdd = () => {
    Taro.navigateTo({ url: '/pages/dishEdit/index' });
  };

  const handleGoCategory = () => {
    Taro.navigateTo({ url: '/pages/categoryManage/index' });
  };

  const handleEdit = (id: string) => {
    Taro.navigateTo({ url: `/pages/dishEdit/index?id=${id}` });
  };

  const handleDelete = (dish: Dish) => {
    Taro.showModal({
      title: '删除菜品',
      content: `确定删除「${dish.name}」吗？`,
      confirmColor: '#f53f3f',
      success: async (res) => {
        if (!res.confirm) return;
        try {
          await deleteDish(dish.id);
          Taro.showToast({ title: '已删除', icon: 'success' });
          load();
        } catch (err) {
          console.error('[DishManagePage] delete dish failed:', err);
          Taro.showToast({ title: '删除失败', icon: 'none' });
        }
      },
    });
  };

  const handleToggleSale = async (dish: Dish, value: boolean) => {
    try {
      await updateDishStatus(dish.id, { onSale: value });
      load();
    } catch (err) {
      console.error('[DishManagePage] update onSale failed:', err);
      Taro.showToast({ title: '操作失败', icon: 'none' });
    }
  };

  const handleToggleSoldOut = async (dish: Dish, value: boolean) => {
    try {
      await updateDishStatus(dish.id, { soldOut: value });
      load();
    } catch (err) {
      console.error('[DishManagePage] update soldOut failed:', err);
      Taro.showToast({ title: '操作失败', icon: 'none' });
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.topBar}>
        <Text className={styles.total}>共 {dishes.length} 道菜品</Text>
        <View className={styles.topActions}>
          <View className={styles.catBtn} onClick={handleGoCategory}>
            <Text className={styles.catBtnText}>分类管理</Text>
          </View>
          <View className={styles.addBtn} onClick={handleAdd}>
            <Text className={styles.addBtnText}>+ 新增菜品</Text>
          </View>
        </View>
      </View>

      <ScrollView scrollY className={styles.list}>
        {categories.map((cat) => {
          const list = dishes.filter((d) => d.categoryId === cat.id);
          if (list.length === 0) return null;
          return (
            <View key={cat.id} className={styles.section}>
              <Text className={styles.sectionTitle}>{cat.name}</Text>
              {list.map((dish) => (
                <View key={dish.id} className={styles.dishRow}>
                  <View className={styles.dishMain}>
                    <Image className={styles.dishImage} src={dish.image} mode="aspectFill" />
                    <View className={styles.dishInfo}>
                      <View className={styles.dishNameRow}>
                        <Text className={styles.dishName}>{dish.name}</Text>
                        {dish.soldOut && <Text className={styles.badgeSoldOut}>售罄</Text>}
                        {dish.onSale === false && <Text className={styles.badgeOff}>已下架</Text>}
                      </View>
                      <Text className={styles.dishPrice}>¥{dish.price}</Text>
                    </View>
                    <View className={styles.actions}>
                      <View className={styles.editBtn} onClick={() => handleEdit(dish.id)}>
                        <Text className={styles.editText}>编辑</Text>
                      </View>
                      <View className={styles.deleteBtn} onClick={() => handleDelete(dish)}>
                        <Text className={styles.deleteText}>删除</Text>
                      </View>
                    </View>
                  </View>
                  <View className={styles.statusRow}>
                    <View className={styles.switchItem}>
                      <Text className={styles.switchLabel}>上架</Text>
                      <Switch
                        checked={dish.onSale !== false}
                        color="#ff6b35"
                        onChange={(e) => handleToggleSale(dish, e.detail.value)}
                      />
                    </View>
                    <View className={styles.switchItem}>
                      <Text className={styles.switchLabel}>售罄</Text>
                      <Switch
                        checked={!!dish.soldOut}
                        color="#f53f3f"
                        onChange={(e) => handleToggleSoldOut(dish, e.detail.value)}
                      />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          );
        })}
        {dishes.length === 0 && (
          <View className={styles.empty}>
            <Text className={styles.emptyText}>暂无菜品</Text>
          </View>
        )}
        <View className={styles.listBottom} />
      </ScrollView>
    </View>
  );
};

export default DishManagePage;