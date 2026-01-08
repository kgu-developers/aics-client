import type { AxiosResponse } from 'axios';

import { post, patch, get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import type {
  NoticeApiResponse,
  CreateNoticeRequest,
  UpdateNoticeRequest,
  NoticeDetailApiResponse,
} from '~/shared/types';

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

export async function updateNotice(
  noticeId: number,
  data: UpdateNoticeRequest,
): Promise<AxiosResponse<NoticeApiResponse>> {
  return patch<NoticeApiResponse, UpdateNoticeRequest>({
    request: END_POINT.ADMIN.NOTICE_UPDATE(noticeId),
    data,
  });
}

export async function deleteNotice(
  noticeId: number,
): Promise<AxiosResponse<void>> {
  return patch<void>({
    request: END_POINT.ADMIN.NOTICE_DELETE(noticeId),
  });
}

export async function getNoticeList(
  params?: NoticeListParams,
): Promise<AxiosResponse<NoticeListResponse>> {
  return get<NoticeListResponse>({
    request: END_POINT.USER.NOTICE_LIST,
    params,
  });
}

export async function getNoticeDetail(
  noticeId: number,
): Promise<AxiosResponse<NoticeDetailApiResponse>> {
  return get<NoticeDetailApiResponse>({
    request: END_POINT.USER.NOTICE(noticeId),
  });
}
