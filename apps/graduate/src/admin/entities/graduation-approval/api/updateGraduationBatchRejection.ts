import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

type UpdateGraduationBatchRejectionRequest = {
  ids: number[];
};

type UpdateGraduationBatchRejectionResponse = {
  disapprovedIds: number[];
};

type UpdateGraduationBatchRejectionResult = {
  rejectedIds: number[];
};

export const updateGraduationBatchRejection = async (
  ids: number[],
): Promise<UpdateGraduationBatchRejectionResult> => {
  const response = await patch<
    UpdateGraduationBatchRejectionResponse,
    UpdateGraduationBatchRejectionRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS_BATCH_REJECT,
    data: { ids },
  });

  return {
    rejectedIds: response.data.disapprovedIds,
  };
};
