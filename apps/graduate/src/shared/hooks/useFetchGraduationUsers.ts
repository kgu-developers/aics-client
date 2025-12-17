import {  useQuery } from '@tanstack/react-query';

import {
  fetchGraduationUsers,
  type FetchGraduationUsersParams,
  type GraduationUserSummaryPageResponse,
} from '../api/fetchGraduationUsers';

export const useFetchGraduationUsers = (params: FetchGraduationUsersParams) => {
  return useQuery<GraduationUserSummaryPageResponse>({
    queryKey: ['graduationUsers', params],
    queryFn: () => fetchGraduationUsers(params),
  });
};

