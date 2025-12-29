import { useQuery } from '@tanstack/react-query';

import { get } from '~/shared/api';
import { END_POINT, QUERY_KEYS } from '~/shared/constants';

import type { Schedule } from '../model/schedule';

const fetchAllSchedule = async (): Promise<Schedule[]> => {
  const response = await get<{ contents: Schedule[] }>({
    request: END_POINT.USER.SCHEDULES_ALL,
  });
  return response.data.contents;
};

export const useFetchAllSchedule = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SCHEDULE_ALL],
    queryFn: fetchAllSchedule,
  });
};
