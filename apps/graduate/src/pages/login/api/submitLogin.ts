import { useMutation } from '@tanstack/react-query';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { setAccessToken, setRefreshToken } from '~/shared/utils';

import type { LoginFormData, LoginResponse } from '../model/login';

export const submitLogin = async (data: LoginFormData) => {
  const response = await post<LoginResponse>({
    request: END_POINT.AUTH.LOGIN,
    data,
  });
  return response.data;
};

export const useSubmitLogin = () => {
  return useMutation({
    mutationFn: submitLogin,
    onSuccess: response => {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      alert(
        '로그인 성공. 토큰을 발급받았습니다. admin 또는 client 페이지로 이동해 작업하세요.',
      );
    },
    onError: () => {
      alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
    },
  });
};
