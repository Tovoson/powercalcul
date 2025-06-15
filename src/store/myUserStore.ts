import {create} from "zustand"

type MyUserStore = {
    isFetch: boolean;
    storInputNumber: number | string;
    storeInputString: string;
    toggleFetch: (data: boolean) => void;
    setInputNumber: (number: number) => void;
    setInputString: (string: string) => void;
};

export const useMyUserStore = create<MyUserStore>() ((set) => ({
    isFetch: false,
    storInputNumber: 0,
    storeInputString: "",

    toggleFetch: (data) => set(() => ({isFetch: data})),
    setInputNumber: (number) => set((set) => ({storInputNumber: set.storInputNumber + String(number)})),
    setInputString: (texte) => set((set) => ({storeInputString: set.storeInputString + texte})),
}));
