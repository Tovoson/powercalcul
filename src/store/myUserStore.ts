import { create } from "zustand";

type MyUserStore = {
  isFetch: boolean;
  firstValue: number | string;
    secondValue: number | string;
  exemple: string;
  operator: string;
  toggleFetch: (data: boolean) => void;
  setInputNumber: (number: number | string) => void;
  setInputString: (string: string) => void;
  refreshState: (numb: number, texte: string) => void;
  deleteStore: () => void;
};

export const useMyUserStore = create<MyUserStore>()((set, get) => ({
  isFetch: false,
  firstValue: "",
  secondValue: "",
  operator: "",
  exemple: "exemple",

  toggleFetch: (data) => set(() => ({ isFetch: data })),

  setInputNumber: (data) => {
    const { operator } = get();
    try {
      if (typeof data === "number") {
        if (operator.length === 0) {
            set((set) => ({ firstValue: set.firstValue + String(data) }));
        } else {
          set((set) => ({ secondValue: set.secondValue + String(data) }));
        }
        
      }
    } catch (error) {}
  },
  setInputString: (texte) => set({ operator: texte }),

  refreshState: (numb, texte) =>
    set(() => ({
      firstValue: numb,
      secondValue: "",
      operator: texte,
    })),

  deleteStore: () => {
    set((state) => ({
      firstValue: state.firstValue.toString().slice(0, -1),
      exemple: state.exemple.slice(0, -1),
      operator: state.operator.slice(0, -1),
    }));
  },
}));
