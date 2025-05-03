import { create } from "zustand";
import { persist } from "zustand/middleware"
// export const useCrudStore = create((set) => ({
//   users: [],
//   userAdd: (user) => set((state) => ({users: [...state.users, user]})),
// }));
export const useCrudStore = create(
    persist(
        (set) => ({
            users: [],
            userAdd: (user) => set((state) =>({users: [...state.users, user] })),
        }),
        {name: "users"}
    )
)