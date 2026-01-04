import type { AxiosResponse } from 'axios';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { StudentDetailApiResponse } from '../types';

export async function getStudentDetail(
  studentId: number,
): Promise<AxiosResponse<StudentDetailApiResponse>> {
  return get<StudentDetailApiResponse>({
    request: END_POINT.USER.STUDENT_DETAIL(studentId),
  });
}
