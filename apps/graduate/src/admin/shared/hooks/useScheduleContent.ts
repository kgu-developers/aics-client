import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import type { SubmissionType } from '~/shared/types';

import { getScheduleContent } from '~/admin/shared/api';

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
