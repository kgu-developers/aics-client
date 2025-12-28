import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateScheduleContent } from '~/shared/api';
import type { UpdateScheduleContentRequest } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import type { SubmissionType } from '~/shared/types';

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
        queryKey: [KEYS.SCHEDULE_CONTENT, variables.submissionType],
      });
    },
  });
}
