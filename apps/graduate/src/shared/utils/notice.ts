import type { NoticeApiResponse } from '~/shared/types';

import type { NoticeItem } from '~/pages/admin/notice/model';

export function transformNoticeResponse(data: NoticeApiResponse): NoticeItem {
  return {
    ...data,
    noticeId: data.postId,
  };
}
