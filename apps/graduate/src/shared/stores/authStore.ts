import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const useAuthStore = create<AuthState>()(set => ({
  isAuthenticated: false,
  setIsAuthenticated: isAuthenticated => set({ isAuthenticated }),
  isAdmin: false,
  setIsAdmin: isAdmin => set({ isAdmin }),
}));
