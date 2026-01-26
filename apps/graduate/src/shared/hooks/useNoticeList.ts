import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import { get } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import { END_POINT } from '~/shared/constants';
import type { NoticeApiResponse } from '~/shared/types';
import { transformNoticeResponse } from '~/shared/utils';

export interface NoticeListParams {
  page?: number;
  size?: number;
  keywords?: string[];
  category?: 'GRADUATION';
}

export interface NoticeListResponse {
  contents: NoticeApiResponse[];
  pageable: {
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
    isEnd: boolean;
  };
}

export async function fetchNoticeList(
  params?: NoticeListParams,
): Promise<AxiosResponse<NoticeListResponse>> {
  return get<NoticeListResponse>({
    request: END_POINT.USER.NOTICE_LIST,
    params,
  });
}

export function useNoticeList(params?: NoticeListParams) {
  return useQuery({
    queryKey: [...KEYS.NOTICE, 'list', params],
    queryFn: async () => {
      const response = await fetchNoticeList(params);
      const transformedContents = response.data.contents.map(
        transformNoticeResponse,
      );
      return {
        ...response.data,
        contents: transformedContents,
      };
    },
  });
}
