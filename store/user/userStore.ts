import { create } from 'zustand';

interface UserState {
  userId: string | null;
}

interface UserActions {
  setUser: (userId: string) => void;
  clearUser: () => void;
}

type UserStore = UserState & UserActions;

const initialState: UserState = {
  userId: null,
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: (userId: string) => set({ userId }),
  clearUser: () => set({ userId: null }),
}));
