import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

type UpdateGraduationBatchDisapprovalRequest = {
  ids: number[];
};

type UpdateGraduationBatchDisapprovalResponse = {
  disapprovedIds: number[];
};

type UpdateGraduationBatchDisapprovalResult = {
  disapprovedIds: number[];
};

export const updateGraduationBatchDisapproval = async (
  ids: number[],
): Promise<UpdateGraduationBatchDisapprovalResult> => {
  const response = await patch<
    UpdateGraduationBatchDisapprovalResponse,
    UpdateGraduationBatchDisapprovalRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS_BATCH_DISAPPROVE,
    data: { ids },
  });

  return {
    disapprovedIds: response.data.disapprovedIds,
  };
};
