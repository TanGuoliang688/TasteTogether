import { callFunction } from './cloud';
import { Category, Dish } from '@/types/menu';

export interface MenuResult {
  categories: Category[];
  dishes: Dish[];
}

export function getMenu() {
  return callFunction<MenuResult>('getMenu');
}