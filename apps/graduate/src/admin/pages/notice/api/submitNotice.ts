import { AxiosResponse } from 'axios';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { CreateNoticeRequest, NoticeApiResponse } from '~/shared/types';

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

export async function createNotice(
  data: Omit<CreateNoticeRequest, 'fileId'>,
  fileId?: number,
): Promise<AxiosResponse<NoticeApiResponse>> {
  return post<
    NoticeApiResponse,
    Omit<CreateNoticeRequest, 'fileId'>,
    { fileId: number }
  >({
    request: END_POINT.ADMIN.NOTICE_CREATE,
    data,
    params: fileId ? { fileId } : undefined,
  });
}
