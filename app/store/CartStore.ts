import { create } from "zustand";
import { Book } from "../models/book";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  cart: Book[];
  //   current: number;
  //   removeClick: number;
  //   isMoreThanThree: boolean;
  //   disabled: boolean;
  setCart: (books: Book[]) => void;
  //   setCurrent: () => void;
  //   setIsMoreThanThree: (bool: boolean) => void;
  //   setRemoveClick: () => void;
  //   setIsDisabled: (bool: boolean) => Promise<void>;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (books) => set((store) => ({ cart: [...store.cart, ...books] })),
    }),
    {
      name: "cart",
    }
  )
);

export default useCartStore;
