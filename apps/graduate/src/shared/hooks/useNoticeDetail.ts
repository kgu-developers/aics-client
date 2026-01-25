import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import { transformNoticeDetailResponse } from '~/shared/utils';

import { getNoticeDetail } from '~/admin/shared/api';

export function useNoticeDetail(noticeId: number) {
  return useQuery({
    queryKey: [...KEYS.NOTICE, 'detail', noticeId],
    queryFn: async () => {
      const response = await getNoticeDetail(noticeId);
      return transformNoticeDetailResponse(response.data);
    },
    enabled: !!noticeId,
  });
}
