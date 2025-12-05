import type { LoginFormData } from './login';

export type SignupFormData = LoginFormData & {
  name: string;
  email: string;
  phone: string;
  major: string;
};
