import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export type GraduationType = 'THESIS' | 'CERTIFICATE';

export type CertificateStatus = {
  type: 'CERTIFICATE';
  submitted: boolean;
  approval: boolean;
};

export type ThesisStageStatus = {
  submitted: boolean;
  approval: boolean;
};

export type ThesisStatus = {
  type: 'THESIS';
  midThesis: ThesisStageStatus;
  finalThesis: ThesisStageStatus;
};

export type GraduationUserStatus = CertificateStatus | ThesisStatus;

export type GraduationUserSummary = {
  id: number;
  studentId: string;
  name: string;
  graduationDate: string;
  graduationType: GraduationType;
  status: GraduationUserStatus;
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

export const useFetchGraduationUsers = (params: FetchGraduationUsersParams) => {
  return useQuery<GraduationUserSummaryPageResponse>({
    queryKey: ['graduationUsers', params],
    queryFn: () => fetchGraduationUsers(params),
    placeholderData: keepPreviousData,
  });
};
