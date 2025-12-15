import { useMutation } from '@tanstack/react-query';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export type SubmitGraduationUserRequest = {
  studentId: string;
  name: string;
  advisorProfessor: string;
  capstoneCompletion: boolean;
  department: string;
  graduationDate: string;
};

export type SubmitGraduationUserResponse = {
  id: number;
};

export const submitGraduationUser = async (data: SubmitGraduationUserRequest) => {
  const response = await post<
    SubmitGraduationUserResponse,
    SubmitGraduationUserRequest
  >({
    request: END_POINT.ADMIN.GRADUATION_USERS,
    data,
  });

  return response.data;
};

export const useSubmitGraduationUser = () => {
  return useMutation({
    mutationFn: submitGraduationUser,
  });
};

