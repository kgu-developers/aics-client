import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export type GraduationType = '미정' | '논문' | '자격증';

export type GraduationTypeFilter = 'THESIS' | 'CERTIFICATE';

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
  status?: GraduationUserStatus | null;
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
  graduationType?: GraduationTypeFilter;
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
