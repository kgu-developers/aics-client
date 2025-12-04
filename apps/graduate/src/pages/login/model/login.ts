export type LoginFormData = {
  userId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
