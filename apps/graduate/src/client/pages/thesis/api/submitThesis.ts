import { useMutation } from '@tanstack/react-query';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { studentKeys, userKeys } from '~/shared/queries';
import { queryClient } from '~/shared/utils';

const submitThesis = async (data: FormData) => {
  const response = await post({
    request: END_POINT.USER.THESIS,
    data,
  });
  return response.data;
};

export const useSubmitThesis = () => {
  return useMutation({
    mutationFn: submitThesis,
    meta: { suppressErrorToast: true },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studentKeys.files() });
      queryClient.invalidateQueries({ queryKey: userKeys.graduationStatus() });
    },
  });
};
