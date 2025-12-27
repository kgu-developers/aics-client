import { useMutation } from '@tanstack/react-query';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { setAccessToken, setRefreshToken, setRole } from '~/shared/utils';

import type { LoginFormData, LoginResponse } from '../model/login';

export const submitLogin = async (data: LoginFormData) => {
  const response = await post<LoginResponse>({
    request: END_POINT.AUTH.LOGIN,
    data,
  });
  return response.data;
};

export const useSubmitLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  return useMutation({
    mutationFn: submitLogin,
    onSuccess: response => {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      setRole(response.role);
      onSuccess?.();
    },
    onError: () => {
      onError?.();
    },
  });
};
