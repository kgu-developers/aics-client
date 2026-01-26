import { useMutation, useQueryClient } from '@tanstack/react-query';

import { noticeKeys } from '~/shared/queries/notice';
import type { UpdateNoticeRequest } from '~/shared/types';

import { updateNotice } from '../api';

export function useUpdateNotice(noticeId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateNoticeRequest) => updateNotice(noticeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeKeys.lists() });
      queryClient.invalidateQueries({ queryKey: noticeKeys.detail(noticeId) });
    },
  });
}
