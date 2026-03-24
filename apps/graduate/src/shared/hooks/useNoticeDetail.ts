import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { noticeKeys } from '~/shared/queries/notice';
import type { NoticeDetailApiResponse } from '~/shared/types';
import { transformNoticeDetailResponse } from '~/shared/utils';

export async function fetchNoticeDetail(
  noticeId: number,
): Promise<AxiosResponse<NoticeDetailApiResponse>> {
  return get<NoticeDetailApiResponse>({
    request: END_POINT.USER.NOTICE(noticeId),
  });
}

export function useNoticeDetail(noticeId: number) {
  return useQuery({
    queryKey: noticeKeys.detail(noticeId),
    queryFn: async () => {
      const response = await fetchNoticeDetail(noticeId);
      return transformNoticeDetailResponse(response.data);
    },
    enabled: !!noticeId,
    meta: { suppressErrorToast: true },
  });
}
