import type { LoginFormData } from '~/pages/login/model/login';

export type SignupFormData = LoginFormData & {
  name: string;
  email: string;
  phone: string;
  major: string;
};
