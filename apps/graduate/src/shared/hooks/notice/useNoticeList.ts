import { useQuery } from '@tanstack/react-query';

import { getNoticeList, type NoticeListParams } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import { transformNoticeResponse } from '~/shared/utils';

export function useNoticeList(params?: NoticeListParams) {
  return useQuery({
    queryKey: [KEYS.NOTICE, 'list', params],
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
