import { create } from 'zustand';

import { USER_ROLE } from '../types/graduation';
import { getAccessToken, getRole } from '../utils';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export const useAuthStore = create<AuthState>(() => ({
  isAuthenticated: !!getAccessToken(),
  isAdmin: getRole() === USER_ROLE.ADMIN,
}));
