import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

type UpdateGraduationUsersBatchApproveRequest = {
  ids: number[];
};

type UpdateGraduationUsersBatchApproveResponse = {
  approvedIds: number[];
};

export const updateGraduationUsersBatchApprove = async (ids: number[]) => {
  const response = await patch<
    UpdateGraduationUsersBatchApproveResponse,
    UpdateGraduationUsersBatchApproveRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS_BATCH_APPROVE,
    data: { ids },
  });

  return response.data;
};
