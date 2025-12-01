import { useMutation } from '@tanstack/react-query';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { SignupFormData } from '../model/signup';

const submitSignup = async (data: SignupFormData) => {
  const response = await post({
    request: END_POINT.AUTH.SIGNUP,
    data,
  });
  return response.data;
};

export const useSubmitSignup = () => {
  return useMutation({
    mutationFn: submitSignup,
    onSuccess: () => {
      alert('회원가입 성공. 로그인해 토큰을 발급받을 수 있습니다.');
    },
    onError: error => {
      alert('회원가입 실패. ' + error.message);
    },
  });
};
