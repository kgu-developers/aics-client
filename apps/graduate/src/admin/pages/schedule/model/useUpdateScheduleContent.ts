import { useMutation, useQueryClient } from '@tanstack/react-query';

import { scheduleKeys } from '~/shared/queries/schedule';
import type { SubmissionType } from '~/shared/types';

import {
  updateScheduleContent,
  UpdateScheduleContentRequest,
} from '../api/updateScheduleContent';

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
        queryKey: scheduleKeys.content(variables.submissionType),
      });
    },
  });
}
