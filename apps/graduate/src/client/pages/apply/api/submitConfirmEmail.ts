import { useMutation } from '@tanstack/react-query';

import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { userKeys } from '~/shared/queries';
import { queryClient } from '~/shared/utils';

const submitConfirmEmail = async (email: string) => {
  const response = await patch({
    request: END_POINT.USER.CONFIRM_EMAIL,
    data: { email },
  });
  return response.data;
};

export const useSubmitConfirmEmail = () => {
  return useMutation({
    mutationFn: submitConfirmEmail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.graduationStatus() });
    },
  });
};
