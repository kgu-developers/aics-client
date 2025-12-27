import type { GraduationType, Role } from '~/shared/constants';

export type LoginFormData = {
  userId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  role: Role;
  graduationType?: GraduationType;
};
