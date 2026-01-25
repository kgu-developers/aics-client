import { useMutation } from '@tanstack/react-query';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { SignupFormData } from '~/client/pages/auth/signup/model/signup';

const submitSignup = async (data: SignupFormData) => {
  const response = await post({
    request: END_POINT.USER.SIGNUP,
    data,
  });
  return response.data;
};

export const useSubmitSignup = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  return useMutation({
    mutationFn: submitSignup,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: error => {
      onError?.(error);
    },
  });
};
