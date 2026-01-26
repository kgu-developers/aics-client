import { useQuery } from '@tanstack/react-query';

import { scheduleKeys } from '~/shared/queries/schedule';
import type { SubmissionType } from '~/shared/types';

import { fetchScheduleContent } from '../api/fetchScheduleContent';

export function useScheduleContent(submissionType: SubmissionType) {
  return useQuery({
    queryKey: scheduleKeys.content(submissionType),
    queryFn: async () => {
      const response = await fetchScheduleContent(submissionType);
      return response.data;
    },
    enabled: !!submissionType,
  });
}
