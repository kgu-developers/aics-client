import { useMutation, useQueryClient } from '@tanstack/react-query';

import { noticeKeys } from '~/shared/queries/notice';

import { removeNotice } from '../api';

export function useRemoveNotice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noticeId: number) => removeNotice(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeKeys.lists() });
    },
  });
}
