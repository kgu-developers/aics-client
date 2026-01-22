import { get } from '~/shared/api';
import { END_POINT, GraduationType } from '~/shared/constants';
import type { StudentStatus } from '~/shared/types';

export type GraduationLabelType = '미정' | '논문' | '자격증';

export type GraduationUserSummary = {
  id: number;
  studentId: string;
  name: string;
  graduationDate: string;
  graduationType: GraduationLabelType;
  status?: StudentStatus;
};

export type PageableResponse = {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  isEnd: boolean;
};

export type GraduationUserSummaryPageResponse = {
  contents: GraduationUserSummary[];
  pageable: PageableResponse;
};

export type FetchGraduationUsersParams = {
  page: number;
  size: number;
  name?: string;
  graduationType?: GraduationType;
};

export const fetchGraduationUsers = async (
  params: FetchGraduationUsersParams,
) => {
  const response = await get<GraduationUserSummaryPageResponse>({
    request: END_POINT.ADMIN.GRADUATION_USERS,
    params,
  });

  return response.data;
};
