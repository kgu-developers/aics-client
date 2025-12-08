import { useMutation } from '@tanstack/react-query';
import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

const submitCertificate = async (data: FormData) => {
  const response = await post({
    request: END_POINT.USER.CERTIFICATE,
    data,
  });
  return response.data;
};

export const useSubmitCertificate = () => {
  return useMutation({
    mutationFn: submitCertificate,
  });
};
