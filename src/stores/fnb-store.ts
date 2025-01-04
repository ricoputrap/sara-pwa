import { create } from 'zustand'

interface IOrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  url: string;
}

type State = {
  orderItems: IOrderItem[]

  addItem: (item: IOrderItem) => void;
  removeItem: (id: number) => void;
  reset: () => void;
}

const useFoodBeverageStore = create<State>((set) => ({
  orderItems: [],

  addItem(item: IOrderItem) {
    set((state) => {
      const index = state.orderItems.findIndex((orderItem) => orderItem.id == item.id);

      // new item
      if (index === -1) {
        return {
          orderItems: [...state.orderItems, item]
        }
      }

      // increase quantity
      const updatedItems: IOrderItem[] = [...state.orderItems];
      updatedItems[index] = {
        ...updatedItems[index],
        quantity: updatedItems[index].quantity + 1
      }

      return { orderItems: updatedItems }
    })
  },

  removeItem(id: number) {
    set((state) => {
      const index = state.orderItems.findIndex((orderItem) => orderItem.id == id);

      if (index === -1) return state;

      const updatedItems: IOrderItem[] = [...state.orderItems];

      // decrease quantity
      if (updatedItems[index].quantity > 1) {
        updatedItems[index] = {
          ...updatedItems[index],
          quantity: updatedItems[index].quantity - 1
        }
      }
      // remove item
      else {
        updatedItems.splice(index, 1);
      }

      return { orderItems: updatedItems }
    })
  },

  reset() {
    set({ orderItems: [] })
  },
}));

export default useFoodBeverageStore