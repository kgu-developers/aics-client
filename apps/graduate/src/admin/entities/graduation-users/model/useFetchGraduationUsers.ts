import { useQuery } from '@tanstack/react-query';

import { graduationUsersKeys } from '~/shared/queries';

import {
  type FetchGraduationUsersParams,
  type GraduationUserSummaryPageResponse,
} from '~/admin/entities/graduation-users/api';
import { fetchGraduationUsers } from '~/admin/entities/graduation-users/api';

export function useFetchGraduationUsers(params: FetchGraduationUsersParams) {
  return useQuery<GraduationUserSummaryPageResponse>({
    queryKey: graduationUsersKeys.list(params),
    queryFn: () => fetchGraduationUsers(params),
  });
}
