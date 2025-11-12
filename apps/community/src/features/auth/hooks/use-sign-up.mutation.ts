import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { END_POINT } from '~/shared/constants/api';
import { PATH } from '~/shared/constants/path';
import { http } from '~/shared/utils/http';

interface SignUpData {
  userId: string;
  password: string;
  name: string;
  major: string;
  email: string;
  phone: string;
}

const useSignUp = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignUpData) => {
      return http.post(END_POINT.SIGN_UP, data);
    },
    onError: () => {
      alert('회원가입에 실패하였습니다.');
    },
    onSuccess: () => {
      alert('회원가입에 성공하였습니다. 다시 로그인 해주세요.');
      router.push(PATH.MAIN);
    },
  });
};

export { useSignUp };
