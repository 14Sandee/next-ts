import { User } from '@/types'
import { create } from 'zustand'

interface UserStore {
    user: Map<number, User> | null,
    updateUser: (user: Map<number, User>) => void
}

export const userMapStore = create<UserStore>()((set) => ({
    user: null,
    updateUser: (newUser) => set(() => ({ user: { ...newUser } })),
}))