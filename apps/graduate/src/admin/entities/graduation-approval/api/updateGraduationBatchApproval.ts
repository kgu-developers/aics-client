import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

type UpdateGraduationBatchApprovalRequest = {
  ids: number[];
};

type UpdateGraduationBatchApprovalResponse = {
  approvedIds: number[];
};

export const updateGraduationBatchApproval = async (ids: number[]) => {
  const response = await patch<
    UpdateGraduationBatchApprovalResponse,
    UpdateGraduationBatchApprovalRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS_BATCH_APPROVE,
    data: { ids },
  });

  return response.data;
};
