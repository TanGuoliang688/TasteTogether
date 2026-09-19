import { saveDish } from './dishStore';

export default function saveDishMock(data: {
  id?: string;
  categoryId: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags?: string[];
}) {
  const dish = saveDish(data);
  return { dishId: dish.id, dish };
}