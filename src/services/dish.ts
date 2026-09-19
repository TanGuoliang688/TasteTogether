import { callFunction } from './cloud';
import { Dish } from '@/types/menu';

export interface DishInput {
  id?: string;
  categoryId: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags?: string[];
}

export function saveDish(data: DishInput) {
  return callFunction<{ dishId: string; dish?: Dish }>('saveDish', data);
}

export function deleteDish(id: string) {
  return callFunction<{ deleted: boolean }>('deleteDish', { id });
}

export function updateDishStatus(id: string, data: { onSale?: boolean; soldOut?: boolean }) {
  return callFunction<{ dishId: string }>('updateDishStatus', { id, ...data });
}