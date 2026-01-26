import { useMutation, useQueryClient } from '@tanstack/react-query';

import { noticeKeys } from '~/shared/queries/notice';
import type { CreateNoticeRequest } from '~/shared/types';

import { createNotice } from '../api';

export function useCreateNotice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ fileId, ...data }: CreateNoticeRequest) =>
      createNotice(data, fileId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeKeys.lists() });
    },
  });
}
