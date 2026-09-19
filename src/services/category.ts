import { callFunction } from './cloud';
import { Category } from '@/types/menu';

export interface CategoryInput {
  id?: string;
  name: string;
  sort?: number;
}

export function saveCategory(data: CategoryInput) {
  return callFunction<{ categoryId: string; category?: Category }>('saveCategory', data);
}

export function deleteCategory(id: string) {
  return callFunction<{ deleted: boolean }>('deleteCategory', { id });
}

export function updateCategorySort(id: string, sort: number) {
  return callFunction<{ categoryId?: string }>('updateCategorySort', { id, sort });
}