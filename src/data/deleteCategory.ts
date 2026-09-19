import { deleteCategory } from './dishStore';

export default function deleteCategoryMock(data: { id: string }) {
  deleteCategory(data.id);
  return { deleted: true };
}