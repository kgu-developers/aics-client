import { useQuery } from '@tanstack/react-query';

import { get } from '~/shared/api';
import { END_POINT, GraduationStatus, QUERY_KEYS } from '~/shared/constants';

import type { StatusText, UserStatus } from '../model/status';

const fetchGraduationStatus = async (): Promise<UserStatus> => {
  const response = await get<UserStatus>({
    request: END_POINT.USER.GRADUATION_STATUS,
  });
  return response.data;
};

const fetchStatusText = async (
  submissionType: GraduationStatus,
): Promise<StatusText> => {
  const response = await get<StatusText>({
    request: END_POINT.USER.STATUS_TEXT(submissionType),
  });
  return response.data;
};

export const useFetchStatusText = (submissionType: GraduationStatus) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SCHEDULE_STATUS_TEXT],
    queryFn: () => fetchStatusText(submissionType),
  });
};

export const useFetchGraduationStatus = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GRADUATION_STATUS],
    queryFn: () => fetchGraduationStatus(),
  });
};
