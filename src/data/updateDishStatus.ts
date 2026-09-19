import { updateDishStatus } from './dishStore';

export default function updateDishStatusMock(data: {
  id: string;
  onSale?: boolean;
  soldOut?: boolean;
}) {
  updateDishStatus(data.id, data);
  return { dishId: data.id };
}