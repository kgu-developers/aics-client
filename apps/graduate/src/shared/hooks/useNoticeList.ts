import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import { transformNoticeResponse } from '~/shared/utils';

import { getNoticeList, type NoticeListParams } from '~/admin/shared/api';

export function useNoticeList(params?: NoticeListParams) {
  return useQuery({
    queryKey: [...KEYS.NOTICE, 'list', params],
    queryFn: async () => {
      const response = await getNoticeList(params);
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

export { useNoticeDetail } from './useNoticeDetail';
