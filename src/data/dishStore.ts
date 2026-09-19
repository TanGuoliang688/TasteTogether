import Taro from '@tarojs/taro';
import { Category, Dish } from '@/types/menu';

const DISH_KEY = '__DISHES__';
const CATEGORY_KEY = '__CATEGORIES__';

export interface DishUpsert {
  id?: string;
  categoryId: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags?: string[];
  onSale?: boolean;
  soldOut?: boolean;
}

export interface CategoryUpsert {
  id?: string;
  name: string;
  sort?: number;
}

const defaultCategories: Category[] = [
  { id: 'c1', name: '招牌热菜', sort: 1 },
  { id: 'c2', name: '凉菜', sort: 2 },
  { id: 'c3', name: '主食', sort: 3 },
  { id: 'c4', name: '汤品', sort: 4 },
  { id: 'c5', name: '饮品甜点', sort: 5 },
];

const defaultDishes: Dish[] = [
  { id: 'd1', categoryId: 'c1', name: '招牌红烧肉', price: 48, image: 'https://picsum.photos/id/292/300/300', description: '肥而不腻，入口即化，选用优质五花肉慢火炖制。', sales: 1200, tags: ['招牌', '热销'] },
  { id: 'd2', categoryId: 'c1', name: '糖醋里脊', price: 38, image: 'https://picsum.photos/id/312/300/300', description: '外酥里嫩，酸甜可口，经典家常味道。', sales: 986, tags: ['人气'] },
  { id: 'd3', categoryId: 'c1', name: '宫保鸡丁', price: 32, image: 'https://picsum.photos/id/326/300/300', description: '鸡肉滑嫩，花生香脆，微辣鲜香。', sales: 1102, tags: ['微辣'] },
  { id: 'd4', categoryId: 'c1', name: '水煮鱼', price: 58, image: 'https://picsum.photos/id/401/300/300', description: '鱼肉鲜嫩，麻辣过瘾，配菜丰富。', sales: 860, tags: ['麻辣'] },
  { id: 'd5', categoryId: 'c2', name: '凉拌黄瓜', price: 16, image: 'https://picsum.photos/id/431/300/300', description: '清脆爽口，蒜香浓郁，开胃解腻。', sales: 620 },
  { id: 'd6', categoryId: 'c2', name: '口水鸡', price: 28, image: 'https://picsum.photos/id/570/300/300', description: '麻辣鲜香，鸡肉细嫩，回味悠长。', sales: 720, tags: ['麻辣'] },
  { id: 'd7', categoryId: 'c2', name: '皮蛋豆腐', price: 18, image: 'https://picsum.photos/id/580/300/300', description: '嫩滑豆腐搭配皮蛋，清凉爽口。', sales: 430 },
  { id: 'd8', categoryId: 'c3', name: '扬州炒饭', price: 22, image: 'https://picsum.photos/id/625/300/300', description: '粒粒分明，配料丰富，香气扑鼻。', sales: 950 },
  { id: 'd9', categoryId: 'c3', name: '手工水饺', price: 26, image: 'https://picsum.photos/id/835/300/300', description: '皮薄馅大，现包现煮，鲜嫩多汁。', sales: 780, tags: ['手工'] },
  { id: 'd10', categoryId: 'c3', name: '番茄鸡蛋面', price: 18, image: 'https://picsum.photos/id/1080/300/300', description: '酸甜开胃，面条筋道，家的味道。', sales: 540 },
  { id: 'd11', categoryId: 'c4', name: '番茄蛋花汤', price: 12, image: 'https://picsum.photos/id/312/300/300', description: '清爽酸甜，番茄浓郁，营养暖胃。', sales: 460 },
  { id: 'd12', categoryId: 'c4', name: '老火鸡汤', price: 30, image: 'https://picsum.photos/id/326/300/300', description: '慢火炖煮数小时，汤汁醇厚滋补。', sales: 390, tags: ['滋补'] },
  { id: 'd13', categoryId: 'c5', name: '鲜榨橙汁', price: 15, image: 'https://picsum.photos/id/401/300/300', description: '新鲜现榨，VC满满，酸甜可口。', sales: 610 },
  { id: 'd14', categoryId: 'c5', name: '冰镇酸梅汤', price: 10, image: 'https://picsum.photos/id/431/300/300', description: '生津止渴，酸甜冰爽，解腻神器。', sales: 520 },
  { id: 'd15', categoryId: 'c5', name: '红豆双皮奶', price: 14, image: 'https://picsum.photos/id/570/300/300', description: '奶香浓郁，红豆绵密，入口即化。', sales: 350 },
];

function loadFromStorage<T>(key: string, defaults: T[]): T[] {
  try {
    const stored = Taro.getStorageSync(key);
    if (stored && Array.isArray(stored)) {
      return stored;
    }
  } catch (e) {
    console.warn(`[dishStore] load ${key} from storage failed:`, e);
  }
  return defaults;
}

function persistCategories() {
  try { Taro.setStorageSync(CATEGORY_KEY, categories); } catch (e) { /* ignore */ }
}

function persistDishes() {
  try { Taro.setStorageSync(DISH_KEY, dishes); } catch (e) { /* ignore */ }
}

let categories: Category[] = loadFromStorage(CATEGORY_KEY, defaultCategories);
let dishes: Dish[] = loadFromStorage(DISH_KEY, defaultDishes);

export function getCategories(): Category[] {
  return [...categories].sort((a, b) => a.sort - b.sort);
}

export function getMenuData(): { categories: Category[]; dishes: Dish[] } {
  return { categories: getCategories(), dishes };
}

export function saveDish(input: DishUpsert): Dish {
  const payload = {
    categoryId: input.categoryId,
    name: input.name,
    price: input.price,
    description: input.description,
    image: input.image,
    tags: input.tags || [],
  };

  if (input.id) {
    const idx = dishes.findIndex((d) => d.id === input.id);
    if (idx >= 0) {
      const updated: Dish = { ...dishes[idx], ...payload };
      if (input.onSale !== undefined) updated.onSale = input.onSale;
      if (input.soldOut !== undefined) updated.soldOut = input.soldOut;
      dishes = dishes.map((d, i) => (i === idx ? updated : d));
      persistDishes();
      return updated;
    }
  }

  const dish: Dish = {
    id: `d_${Date.now()}`,
    ...payload,
    sales: 0,
    onSale: input.onSale ?? true,
    soldOut: input.soldOut ?? false,
  };
  dishes = [dish, ...dishes];
  persistDishes();
  return dish;
}

export function deleteDish(id: string): void {
  dishes = dishes.filter((d) => d.id !== id);
  persistDishes();
}

export function updateDishStatus(
  id: string,
  data: { onSale?: boolean; soldOut?: boolean }
): Dish | undefined {
  const idx = dishes.findIndex((d) => d.id === id);
  if (idx < 0) return undefined;
  const updated: Dish = { ...dishes[idx] };
  if (data.onSale !== undefined) updated.onSale = data.onSale;
  if (data.soldOut !== undefined) updated.soldOut = data.soldOut;
  dishes = dishes.map((d, i) => (i === idx ? updated : d));
  persistDishes();
  return updated;
}

export function saveCategory(input: CategoryUpsert): Category {
  if (input.id) {
    const idx = categories.findIndex((c) => c.id === input.id);
    if (idx >= 0) {
      const updated: Category = {
        ...categories[idx],
        name: input.name,
        sort: input.sort ?? categories[idx].sort,
      };
      categories = categories.map((c, i) => (i === idx ? updated : c));
      persistCategories();
      return updated;
    }
  }
  const maxSort = categories.length
    ? Math.max(...categories.map((c) => c.sort))
    : 0;
  const category: Category = {
    id: `c_${Date.now()}`,
    name: input.name,
    sort: input.sort ?? maxSort + 1,
  };
  categories = [...categories, category];
  persistCategories();
  return category;
}

export function deleteCategory(id: string): void {
  if (dishes.some((d) => d.categoryId === id)) {
    throw new Error('该分类下还有菜品，无法删除');
  }
  categories = categories.filter((c) => c.id !== id);
  persistCategories();
}

export function updateCategorySort(id: string, sort: number): Category | undefined {
  const idx = categories.findIndex((c) => c.id === id);
  if (idx < 0) return undefined;
  const updated: Category = { ...categories[idx], sort };
  categories = categories.map((c, i) => (i === idx ? updated : c));
  persistCategories();
  return updated;
}