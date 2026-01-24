import { useQuery } from '@tanstack/react-query';

import { get } from '~/shared/api';
import { END_POINT, KEYS } from '~/shared/constants';

import type { UserStatus } from '../model/status';

const fetchGraduationStatus = async (): Promise<UserStatus> => {
  const response = await get<UserStatus>({
    request: END_POINT.USER.GRADUATION_STATUS,
  });
  return response.data;
};

export const useFetchGraduationStatus = () => {
  return useQuery({
    queryKey: [...KEYS.GRADUATION_STATUS],
    queryFn: () => fetchGraduationStatus(),
  });
};
