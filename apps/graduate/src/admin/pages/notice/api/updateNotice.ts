import { AxiosResponse } from 'axios';

import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { UpdateNoticeRequest, NoticeApiResponse } from '~/shared/types';

export async function updateNotice(
  noticeId: number,
  data: UpdateNoticeRequest,
): Promise<AxiosResponse<NoticeApiResponse>> {
  return patch<NoticeApiResponse, UpdateNoticeRequest>({
    request: END_POINT.ADMIN.NOTICE_UPDATE(noticeId),
    data,
  });
}
