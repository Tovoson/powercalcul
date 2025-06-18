import { create } from "zustand";

type MyUserStore = {
  isFetch: boolean;
  firstValue: number | string;
    secondValue: number | string;
    resultat: number;
  exemple: string;
  operator: string;
  op: string[]; // Define 'op' as an array of strings
  a: number;
  
  toggleFetch: (data: boolean) => void;
  setInputNumber: (number: number | string) => void;
  setInputString: (string: string) => void;
  refreshState: () => void;
  deleteStore: () => void;
  equalCalcul: () => void;
  multipleOperation: (value: number, operateurs: string) => number | undefined;
};

export const useMyUserStore = create<MyUserStore>()((set, get) => ({
  isFetch: false,
  firstValue: "",
  secondValue: "",
  operator: "",
  exemple: "exemple",
  resultat: 0,
  op: [],
  a: 0,

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

  refreshState: () =>
    set(() => ({
      firstValue: "",
      secondValue: "",
      operator: "",
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

  multipleOperation: (value: number, operateurs: string) => {
    set((state) => ({
      op: [...state.op, operateurs],
      a: value
    }));
    
    const { op, a } = get();
      if(op.length === 1){					
        if(op.includes("+")){
           return a + 0;
        } else if (op.includes("*")){
           return a * 1;
        } else if (op.includes("/")){
           return a / 1;
        } else if (op.includes("-")){
           return a - 0;
        } 
      } else if(op.length > 1) {
        if(op.includes("+")){
           return a + 0;
        } else if (op.includes("*")){
           return a * 1;
        } else if (op.includes("/")){
           return a / 1;
        } else if (op.includes("-")){
           return a - 0;
        } 
      }

  },

  equalCalcul: () => {
    const { firstValue, secondValue, operator } = get();
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
