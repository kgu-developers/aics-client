import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Dayjs } from 'dayjs';

import { DATE_FORMAT } from '~/shared/config';
import { scheduleKeys } from '~/shared/queries/schedule';
import { UpdateScheduleRequest } from '~/shared/types';

import { updateSchedule } from '../api';

interface UseUpdateScheduleParams {
  scheduleId: number;
  data: {
    startDate: Dayjs;
    endDate: Dayjs;
  };
}

export function useUpdateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ scheduleId, data }: UseUpdateScheduleParams) => {
      const requestData: UpdateScheduleRequest = {
        ...data,
        startDate: data.startDate.format(DATE_FORMAT.ISO_DATETIME),
        endDate: data.endDate.endOf('day').format(DATE_FORMAT.ISO_DATETIME),
      };
      return updateSchedule(scheduleId, requestData);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: scheduleKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: scheduleKeys.detail(variables.scheduleId),
      });
    },
  });
}
