import type {
  NoticeApiResponse,
  NoticeDetailApiResponse,
} from '~/shared/types';

import type { NoticeDetailItem, NoticeItem } from '~/admin/pages/notice/model';

export function transformNoticeResponse(data: NoticeApiResponse): NoticeItem {
  return {
    ...data,
    noticeId: data.postId,
  };
}
export function transformNoticeDetailResponse(
  data: NoticeDetailApiResponse,
): NoticeDetailItem {
  return {
    ...data,
    noticeId: data.postId,
  };
}
