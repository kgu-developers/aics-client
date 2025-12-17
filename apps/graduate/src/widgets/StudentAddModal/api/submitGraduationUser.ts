import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { GraduationUserCreateRequest } from '../types/studentAddModal';

export type SubmitGraduationUserResponse = {
  id: number;
};

export const submitGraduationUser = async (
  data: GraduationUserCreateRequest,
) => {
  const response = await post<
    SubmitGraduationUserResponse,
    GraduationUserCreateRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS,
    data,
  });

  return response.data;
};
