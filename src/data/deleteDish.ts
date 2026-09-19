import { deleteDish } from './dishStore';

export default function deleteDishMock(data: { id: string }) {
  deleteDish(data.id);
  return { deleted: true };
}