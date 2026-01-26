import type { GraduationType, UserRole } from '~/shared/types/graduation';

export type LoginFormData = {
  userId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  role: UserRole;
  graduationType?: GraduationType;
};
