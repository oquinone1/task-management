import { create } from "zustand";

export const useStore = create((set) => ({
  menuItems: [],
  selectedProjectItems: {},
  taskManagerTitle: "",

  setMenuItems: (newMenu: []) => set(() => ({ menuItems: newMenu })),
  setTaskManagerTitle: (name: "") => set(() => ({ taskManagerTitle: name })),
  setSelectedProjectItems: (items: {}) =>
    set(() => ({ selectedProjectItems: items })),
}));
