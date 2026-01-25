import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import {
  type FetchGraduationUsersParams,
  type GraduationUserSummaryPageResponse,
} from '~/admin/shared/api';
import { fetchGraduationUsers } from '~/admin/shared/api';

export function useFetchGraduationUsers(params: FetchGraduationUsersParams) {
  return useQuery<GraduationUserSummaryPageResponse>({
    queryKey: [...KEYS.GRADUATION_USERS, params],
    queryFn: () => fetchGraduationUsers(params),
  });
}
