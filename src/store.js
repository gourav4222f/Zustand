import { create } from 'zustand';

export const useStore = create((set) => (
    {
        data: {
            name: "gourav",
            age: 20,
            email: "gouravthakur19@gmail.com"
        },
        setname: (newname) => { set((state) => ({ data: { ...state, name: newname } })) }
    }
));