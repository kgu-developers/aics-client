import { del } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

type RemoveGraduationUsersBatchRequest = {
  ids: number[];
};

type RemoveGraduationUsersBatchResponse = {
  deletedIds: number[];
};

export const removeGraduationUsersBatch = async (ids: number[]) => {
  const response = await del<
    RemoveGraduationUsersBatchResponse,
    RemoveGraduationUsersBatchRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS_BATCH,
    data: { ids },
  });

  return response.data;
};
