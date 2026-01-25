import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { PageableResponse } from '~/admin/entities/graduation-users/api/fetchGraduationUsers';

export type AdminUser = {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'SUPER' | string;
  major: 'CSE' | 'AIT' | 'SSS' | string;
};

export type AdminUserPageResponse = {
  contents: AdminUser[];
  pageable: PageableResponse;
};

export type FetchAdminUsersParams = {
  page: number;
  size: number;
  name?: string;
};

export const fetchAdminUsers = async (params: FetchAdminUsersParams) => {
  const response = await get<AdminUserPageResponse>({
    request: END_POINT.ADMIN.USERS,
    params,
  });

  return response.data;
};
