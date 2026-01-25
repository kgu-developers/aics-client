import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import type { SubmissionType } from '~/shared/types';

import {
  updateScheduleContent,
  UpdateScheduleContentRequest,
} from '~/admin/shared/api';

interface UseUpdateScheduleContentParams {
  submissionType: SubmissionType;
  data: UpdateScheduleContentRequest;
}

export function useUpdateScheduleContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ submissionType, data }: UseUpdateScheduleContentParams) =>
      updateScheduleContent(submissionType, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [...KEYS.SCHEDULE_CONTENT, variables.submissionType],
      });
    },
  });
}
