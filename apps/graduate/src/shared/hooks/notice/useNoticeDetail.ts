import { useQuery } from '@tanstack/react-query';

import { getNoticeDetail } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import { transformNoticeResponse } from '~/shared/utils';

export function useNoticeDetail(noticeId: number) {
  return useQuery({
    queryKey: [KEYS.NOTICE, noticeId],
    queryFn: async () => {
      const response = await getNoticeDetail(noticeId);
      return transformNoticeResponse(response.data);
    },
    enabled: !!noticeId,
  });
}
