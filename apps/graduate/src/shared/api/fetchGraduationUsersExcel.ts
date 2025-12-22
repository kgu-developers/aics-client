import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import type { GraduationTypeFilter } from './fetchGraduationUsers';

export type FetchGraduationUsersExcelParams = {
  graduationType?: GraduationTypeFilter;
};

export const fetchGraduationUsersExcel = async (
  params?: FetchGraduationUsersExcelParams,
) => {
  const response = await get<Blob, FetchGraduationUsersExcelParams>({
    request: END_POINT.ADMIN.GRADUATION_USERS_EXCEL,
    params,
    headers: {
      Accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    responseType: 'blob',
  });

  return response;
};
