import { saveCategory } from './dishStore';

export default function saveCategoryMock(data: {
  id?: string;
  name: string;
  sort?: number;
}) {
  const category = saveCategory(data);
  return { categoryId: category.id, category };
}