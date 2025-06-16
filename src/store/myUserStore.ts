import { create } from "zustand";

type MyUserStore = {
  isFetch: boolean;
  firstValue: number | string;
    secondValue: number | string;
    resultat: number;
  exemple: string;
  operator: string;
  toggleFetch: (data: boolean) => void;
  setInputNumber: (number: number | string) => void;
  setInputString: (string: string) => void;
  refreshState: (numb: number, texte: string) => void;
  deleteStore: () => void;
  equalCalcul: () => void;
};

export const useMyUserStore = create<MyUserStore>()((set, get) => ({
  isFetch: false,
  firstValue: "",
  secondValue: "",
  operator: "",
  exemple: "exemple",
  resultat: 0,

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
      resultat: 0,
    })),

  deleteStore: () => {
    set((state) => ({
      secondValue: state.secondValue.toString().slice(0, -1)
    }));

    if (get().secondValue.toString().length === 0) {
        set(({ operator: "" }));

        if (get().operator.toString().length === 0) {
            set((state) => ({
                firstValue: state.firstValue.toString().slice(0, -1)
            }));
        }  
    }
  },

  equalCalcul: () => {
    const { firstValue, secondValue, operator, resultat } = get();
    let result = 0;

    if (operator === "+") {
      result = Number(firstValue) + Number(secondValue);
    } else if (operator === "-") {
      result = Number(firstValue) - Number(secondValue);
    } else if (operator === "x") {
      result = Number(firstValue) * Number(secondValue);
    } else if (operator === "/") {
      result = Number(firstValue) / Number(secondValue);
    } else if (operator === "%") {
      result = Number(firstValue) % Number(secondValue);
    } else if (operator === "X²") {
      result = Number(firstValue) ** 2;
    } else if (operator === "1/X") {
      result = 1 / Number(firstValue);
    } else if (operator === "√") {
      result = Math.sqrt(Number(firstValue));
    }

    set(() => ({
      firstValue: "",
      secondValue: "",
      operator: "",
      resultat: result,
    }));
  }
}));
