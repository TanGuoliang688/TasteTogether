import React, { useState } from 'react';
import { View, Text, Input, ScrollView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import classnames from 'classnames';
import { getMenu } from '@/services/menu';
import { saveCategory, deleteCategory, updateCategorySort } from '@/services/category';
import { Category } from '@/types/menu';
import styles from './index.module.scss';

const CategoryManagePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dishCounts, setDishCounts] = useState<Record<string, number>>({});
  const [nameInput, setNameInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      const res = await getMenu();
      setCategories(res.categories);
      const counts: Record<string, number> = {};
      res.dishes.forEach((d) => {
        counts[d.categoryId] = (counts[d.categoryId] || 0) + 1;
      });
      setDishCounts(counts);
    } catch (err) {
      console.error('[CategoryManagePage] load failed:', err);
      Taro.showToast({ title: '加载分类失败', icon: 'none' });
    }
  };

  useDidShow(() => {
    load();
  });

  const resetEdit = () => {
    setEditingId(null);
    setNameInput('');
  };

  const handleSave = async () => {
    const name = nameInput.trim();
    if (!name) {
      Taro.showToast({ title: '请输入分类名称', icon: 'none' });
      return;
    }
    if (saving) return;

    setSaving(true);
    try {
      await saveCategory(editingId ? { id: editingId, name } : { name });
      Taro.showToast({ title: editingId ? '已保存' : '已新增', icon: 'success' });
      resetEdit();
      load();
    } catch (err) {
      console.error('[CategoryManagePage] save failed:', err);
      Taro.showToast({ title: '保存失败', icon: 'none' });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (cat: Category) => {
    setEditingId(cat.id);
    setNameInput(cat.name);
  };

  const handleDelete = (cat: Category) => {
    Taro.showModal({
      title: '删除分类',
      content: `确定删除「${cat.name}」吗？`,
      confirmColor: '#f53f3f',
      success: async (res) => {
        if (!res.confirm) return;
        try {
          await deleteCategory(cat.id);
          Taro.showToast({ title: '已删除', icon: 'success' });
          if (editingId === cat.id) resetEdit();
          load();
        } catch (err: any) {
          console.error('[CategoryManagePage] delete failed:', err);
          Taro.showToast({ title: err?.message || '删除失败', icon: 'none' });
        }
      },
    });
  };

  const swapSort = async (fromIndex: number, toIndex: number) => {
    const a = categories[fromIndex];
    const b = categories[toIndex];
    if (!a || !b) return;
    try {
      await updateCategorySort(a.id, b.sort);
      await updateCategorySort(b.id, a.sort);
      load();
    } catch (err) {
      console.error('[CategoryManagePage] reorder failed:', err);
      Taro.showToast({ title: '排序失败', icon: 'none' });
    }
  };

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    swapSort(index, index - 1);
  };

  const handleMoveDown = (index: number) => {
    if (index >= categories.length - 1) return;
    swapSort(index, index + 1);
  };

  return (
    <View className={styles.page}>
      <View className={styles.formBar}>
        <Input
          className={styles.input}
          value={nameInput}
          placeholder="输入分类名称"
          placeholderClass={styles.placeholder}
          onInput={(e) => setNameInput(e.detail.value)}
        />
        <View className={styles.submitBtn} onClick={handleSave}>
          <Text className={styles.submitText}>{saving ? '保存中...' : editingId ? '保存' : '新增'}</Text>
        </View>
      </View>
      {editingId && (
        <View className={styles.cancelEdit} onClick={resetEdit}>
          <Text className={styles.cancelEditText}>取消编辑</Text>
        </View>
      )}

      <ScrollView scrollY className={styles.list}>
        {categories.map((cat, index) => (
          <View key={cat.id} className={styles.row}>
            <View className={styles.orderBtns}>
              <View
                className={classnames(styles.orderBtn, index === 0 && styles.orderBtnDisabled)}
                onClick={() => handleMoveUp(index)}
              >
                <Text className={styles.orderBtnText}>↑</Text>
              </View>
              <View
                className={classnames(styles.orderBtn, index === categories.length - 1 && styles.orderBtnDisabled)}
                onClick={() => handleMoveDown(index)}
              >
                <Text className={styles.orderBtnText}>↓</Text>
              </View>
            </View>
            <View className={styles.info}>
              <Text className={styles.name}>{cat.name}</Text>
              <Text className={styles.count}>{dishCounts[cat.id] || 0} 道菜品</Text>
            </View>
            <View className={styles.actions}>
              <View className={styles.editBtn} onClick={() => handleEdit(cat)}>
                <Text className={styles.editText}>编辑</Text>
              </View>
              <View className={styles.deleteBtn} onClick={() => handleDelete(cat)}>
                <Text className={styles.deleteText}>删除</Text>
              </View>
            </View>
          </View>
        ))}
        {categories.length === 0 && (
          <View className={styles.empty}>
            <Text className={styles.emptyText}>暂无分类，请新增</Text>
          </View>
        )}
        <View className={styles.listBottom} />
      </ScrollView>
    </View>
  );
};

export default CategoryManagePage;