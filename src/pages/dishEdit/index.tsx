import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Input, Textarea, Image, Picker } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { getMenu } from '@/services/menu';
import { saveDish } from '@/services/dish';
import { uploadImage } from '@/services/upload';
import { Category } from '@/types/menu';
import styles from './index.module.scss';

const DEFAULT_IMAGE = 'https://picsum.photos/id/292/300/300';

const DishEditPage: React.FC = () => {
  const router = useRouter();
  const editId = router.params.id;

  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    getMenu()
      .then((res) => {
        setCategories(res.categories);
        if (res.categories.length > 0 && !categoryId) {
          setCategoryId(res.categories[0].id);
        }
        if (editId) {
          const dish = res.dishes.find((d) => d.id === editId);
          if (dish) {
            setName(dish.name);
            setPrice(String(dish.price));
            setCategoryId(dish.categoryId);
            setDescription(dish.description);
            setImage(dish.image);
          }
        }
      })
      .catch((err) => {
        console.error('[DishEditPage] load failed:', err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  const selectedIndex = useMemo(() => {
    const idx = categories.findIndex((c) => c.id === categoryId);
    return idx < 0 ? 0 : idx;
  }, [categories, categoryId]);

  const handleChooseImage = async () => {
    if (uploading) return;
    let path: string | undefined;
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
      });
      path = res.tempFilePaths[0];
    } catch (err) {
      // 用户取消选择图片
      return;
    }
    if (!path) return;

    setUploading(true);
    setUploadProgress(0);
    try {
      const uploaded = await uploadImage(path, `dish_${Date.now()}.png`, setUploadProgress);
      setImage(uploaded);
      setUploadProgress(100);
    } catch (err) {
      console.error('[DishEditPage] upload image failed:', err);
      Taro.showToast({ title: '上传失败', icon: 'none' });
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    const priceNum = Number(price);
    if (!name.trim()) {
      Taro.showToast({ title: '请输入菜品名称', icon: 'none' });
      return;
    }
    if (!price || isNaN(priceNum) || priceNum <= 0) {
      Taro.showToast({ title: '请输入正确的价格', icon: 'none' });
      return;
    }
    if (!categoryId) {
      Taro.showToast({ title: '请选择分类', icon: 'none' });
      return;
    }
    if (submitting) return;

    setSubmitting(true);
    try {
      await saveDish({
        id: editId,
        name: name.trim(),
        price: priceNum,
        categoryId,
        description: description.trim(),
        image: image || DEFAULT_IMAGE,
      });
      Taro.showToast({ title: '保存成功', icon: 'success' });
      setTimeout(() => Taro.navigateBack(), 1000);
    } catch (err) {
      console.error('[DishEditPage] save failed:', err);
      Taro.showToast({ title: '保存失败', icon: 'none' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className={styles.page}>
      <View className={styles.formCard}>
        <View className={styles.imageSection}>
          <Image className={styles.imagePreview} src={image || DEFAULT_IMAGE} mode="aspectFill" />
          <View className={styles.chooseBtn} onClick={handleChooseImage}>
            <Text className={styles.chooseBtnText}>{uploading ? '上传中...' : '选择图片'}</Text>
          </View>
          {uploading && (
            <View className={styles.progressWrap}>
              <View className={styles.progressTrack}>
                <View className={styles.progressBar} style={{ width: `${uploadProgress}%` }} />
              </View>
              <Text className={styles.progressText}>{uploadProgress}%</Text>
            </View>
          )}
        </View>

        <View className={styles.field}>
          <Text className={styles.label}>菜品名称</Text>
          <Input
            className={styles.input}
            value={name}
            placeholder="请输入菜品名称"
            placeholderClass={styles.placeholder}
            onInput={(e) => setName(e.detail.value)}
          />
        </View>

        <View className={styles.field}>
          <Text className={styles.label}>价格（元）</Text>
          <Input
            className={styles.input}
            type="digit"
            value={price}
            placeholder="请输入价格"
            placeholderClass={styles.placeholder}
            onInput={(e) => setPrice(e.detail.value)}
          />
        </View>

        <View className={styles.field}>
          <Text className={styles.label}>所属分类</Text>
          <Picker
            mode="selector"
            range={categories}
            rangeKey="name"
            value={selectedIndex}
            onChange={(e) => {
              const cat = categories[Number(e.detail.value)];
              if (cat) setCategoryId(cat.id);
            }}
          >
            <View className={styles.pickerValue}>
              <Text>{categories[selectedIndex]?.name || '请选择分类'}</Text>
              <Text className={styles.pickerArrow}>›</Text>
            </View>
          </Picker>
        </View>

        <View className={styles.field}>
          <Text className={styles.label}>菜品描述</Text>
          <Textarea
            className={styles.textarea}
            value={description}
            placeholder="请输入菜品描述"
            placeholderClass={styles.placeholder}
            maxlength={100}
            onInput={(e) => setDescription(e.detail.value)}
          />
        </View>
      </View>

      <View className={styles.footer}>
        <View className={styles.saveBtn} onClick={handleSave}>
          <Text className={styles.saveText}>{submitting ? '保存中...' : '保存菜品'}</Text>
        </View>
      </View>
    </View>
  );
};

export default DishEditPage;