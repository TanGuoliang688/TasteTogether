import { create } from 'zustand';
import { Dish } from '@/types/menu';

export interface CartItem {
  dishId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (dish: Dish) => void;
  increase: (dishId: string) => void;
  decrease: (dishId: string) => void;
  removeItem: (dishId: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (dish) =>
    set((state) => {
      const exist = state.items.find((i) => i.dishId === dish.id);
      if (exist) {
        return {
          items: state.items.map((i) =>
            i.dishId === dish.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            dishId: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            quantity: 1,
          },
        ],
      };
    }),
  addItemWithQuantity: (dish, quantity) =>
    set((state) => {
      const qty = Math.max(1, quantity);
      const exist = state.items.find((i) => i.dishId === dish.id);
      if (exist) {
        return {
          items: state.items.map((i) =>
            i.dishId === dish.id ? { ...i, quantity: i.quantity + qty } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { dishId: dish.id, name: dish.name, price: dish.price, image: dish.image, quantity: qty },
        ],
      };
    }),
  increase: (dishId) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.dishId === dishId ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),
  decrease: (dishId) =>
    set((state) => ({
      items: state.items
        .map((i) => (i.dishId === dishId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    })),
  removeItem: (dishId) =>
    set((state) => ({ items: state.items.filter((i) => i.dishId !== dishId) })),
  clear: () => set({ items: [] }),
}));

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}