import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export type UpdateGraduationDisapprovalParams = {
  graduationUserId: number;
  submissionId: number;
};

type UpdateGraduationDisapprovalResponse = {
  id: number;
};

export const updateGraduationDisapproval = async ({
  graduationUserId,
  submissionId,
}: UpdateGraduationDisapprovalParams) => {
  const response = await patch<UpdateGraduationDisapprovalResponse>({
    request: END_POINT.ADMIN.GRADUATION_USER_DISAPPROVE(
      graduationUserId,
      submissionId,
    ),
  });

  return response.data;
};
