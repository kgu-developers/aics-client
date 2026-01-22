import { useQuery } from '@tanstack/react-query';

import {
  fetchGraduationUsers,
  type FetchGraduationUsersParams,
  type GraduationUserSummaryPageResponse,
} from '~/shared/api';
import { KEYS } from '~/shared/constants';

export function useFetchGraduationUsers(params: FetchGraduationUsersParams) {
  return useQuery<GraduationUserSummaryPageResponse>({
    queryKey: [...KEYS.GRADUATION_USERS, params],
    queryFn: () => fetchGraduationUsers(params),
  });
}
