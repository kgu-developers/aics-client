import type { LoginFormData } from '~/client/pages/auth/login/model/login';

export type SignupFormData = LoginFormData & {
  name: string;
  email: string;
  phone: string;
  major: string;
};
