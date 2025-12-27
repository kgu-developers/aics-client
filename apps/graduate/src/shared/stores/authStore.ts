import { create } from 'zustand';

import { ROLE } from '../constants';
import { getAccessToken, getRole } from '../utils';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: !!getAccessToken(),
  isAdmin: getRole() === ROLE.ADMIN,
}));
