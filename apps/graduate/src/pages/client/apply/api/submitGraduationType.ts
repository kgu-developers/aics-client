import { useMutation } from '@tanstack/react-query';
import { patch } from '~/shared/api';
import { END_POINT, type GraduationType } from '~/shared/constants';

const submitGraduationType = async (graduationType: GraduationType) => {
  const response = await patch({
    request: END_POINT.USER.GRADUATION_TYPE,
    data: { graduationType },
  });
  return response.data;
};

export const useSubmitGraduationType = () => {
  return useMutation({
    mutationFn: submitGraduationType,
  });
};
