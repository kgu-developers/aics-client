import { useQuery } from '@tanstack/react-query';

import { getScheduleContent } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import type { SubmissionType } from '~/shared/types';

export function useScheduleContent(submissionType: SubmissionType) {
  return useQuery({
    queryKey: [...KEYS.SCHEDULE_CONTENT, submissionType],
    queryFn: async () => {
      const response = await getScheduleContent(submissionType);
      return response.data;
    },
    enabled: !!submissionType,
  });
}
