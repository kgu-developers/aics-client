import { END_POINT, GraduationStatus, QUERY_KEYS } from '~/shared/constants';
import type { StatusText } from '../model/status';
import { get } from '~/shared/api';
import { useQuery } from '@tanstack/react-query';

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
