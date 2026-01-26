import { useQuery } from '@tanstack/react-query';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { userKeys } from '~/shared/queries/user';

import type { UserStatus } from '../model/status';

const fetchGraduationStatus = async (): Promise<UserStatus> => {
  const response = await get<UserStatus>({
    request: END_POINT.USER.GRADUATION_STATUS,
  });
  return response.data;
};

export const useFetchGraduationStatus = () => {
  return useQuery({
    queryKey: userKeys.graduationStatus(),
    queryFn: () => fetchGraduationStatus(),
  });
};
