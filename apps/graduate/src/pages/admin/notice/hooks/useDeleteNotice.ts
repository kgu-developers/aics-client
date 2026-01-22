import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteNotice } from '~/shared/api';
import { KEYS } from '~/shared/constants';

export function useDeleteNotice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noticeId: number) => deleteNotice(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.NOTICE, 'list'] });
    },
  });
}
