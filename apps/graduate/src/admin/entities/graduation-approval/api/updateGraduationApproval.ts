import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export type UpdateGraduationApprovalParams = {
  graduationUserId: number;
  submissionId: number;
};

type UpdateGraduationApprovalResponse = {
  id: number;
};

export const updateGraduationApproval = async ({
  graduationUserId,
  submissionId,
}: UpdateGraduationApprovalParams) => {
  const response = await patch<UpdateGraduationApprovalResponse>({
    request: END_POINT.ADMIN.GRADUATION_USER_APPROVE(
      graduationUserId,
      submissionId,
    ),
  });

  return response.data;
};
