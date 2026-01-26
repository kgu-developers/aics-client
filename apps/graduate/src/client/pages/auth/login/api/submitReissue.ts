import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { LoginResponse } from '../model/login';

export const submitReissue = async (refreshToken: string) => {
  const response = await post<LoginResponse>({
    request: END_POINT.AUTH.REFRESH,
    data: { refreshToken },
  });
  return response.data;
};
