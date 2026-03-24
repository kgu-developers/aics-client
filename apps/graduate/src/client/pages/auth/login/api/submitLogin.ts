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
  onError?: (errorCode: string) => void;
}) => {
  return useMutation({
    mutationFn: submitLogin,
    meta: { suppressErrorToast: true },
    onSuccess: response => {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      setRole(response.role);
      onSuccess?.();
    },
    onError: (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : '로그인에 실패했습니다';
      onError?.(errorMessage);
    },
  });
};
