import { updateCategorySort } from './dishStore';

export default function updateCategorySortMock(data: { id: string; sort: number }) {
  const category = updateCategorySort(data.id, data.sort);
  return { categoryId: category?.id };
}