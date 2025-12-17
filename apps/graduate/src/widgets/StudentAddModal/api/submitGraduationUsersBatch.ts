import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { GraduationUserCreateRequest } from '../types/studentAddModal';

type SubmitGraduationUsersBatchRequest = {
  graduationUsers: GraduationUserCreateRequest[];
};

type SubmitGraduationUsersBatchResponse = {
  createdIds: number[];
};

export const submitGraduationUsersBatch = async (
  data: SubmitGraduationUsersBatchRequest,
) => {
  const response = await post<
    SubmitGraduationUsersBatchResponse,
    SubmitGraduationUsersBatchRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS_BATCH,
    data,
  });

  return response.data;
};
