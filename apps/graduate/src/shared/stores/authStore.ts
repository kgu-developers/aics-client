import { create } from 'zustand';

import { USER_ROLE } from '../types/graduation';
import { getAccessToken, getRole } from '../utils';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  updateAuth: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: !!getAccessToken(),
  isAdmin: getRole() === USER_ROLE.ADMIN,
  updateAuth: () => {
    set({
      isAuthenticated: !!getAccessToken(),
      isAdmin: getRole() === USER_ROLE.ADMIN,
    });
  },
}));
