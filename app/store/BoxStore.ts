import { create } from "zustand";

interface BoxStore {
  open: boolean;
  setOpen: () => void;
  setClose: () => void;
  setToggle: () => void;
  setVisible: (bool: boolean) => void;
}

const useBoxStore = create<BoxStore>()((set) => ({
  open: false,
  setOpen: () => set((store) => ({ open: true })),
  setClose: () => set((store) => ({ open: false })),
  setToggle: () => set((store) => ({ open: !store.open })),
  setVisible: (bool) => set((store) => ({ open: bool })),
}));
export default useBoxStore;
