import {create} from "zustand"

type MyUserStore = {
    isFetch: boolean;
    toggleFetch: (data: boolean) => void;
};

export const useMyUserStore = create<MyUserStore>() ((set) => ({
    isFetch: false,

    toggleFetch: (data) => set(() => ({isFetch: data})),
}));
