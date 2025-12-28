import type { AxiosResponse } from 'axios';

import { post, patch, del, get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import type {
  NoticeApiResponse,
  CreateNoticeRequest,
  UpdateNoticeRequest,
  TogglePinnedRequest,
  NoticeDetailApiResponse,
} from '~/shared/types';

export interface NoticeListParams {
  page?: number;
  size?: number;
  keywords?: string[];
  category?: 'NOTIFICATION' | 'NEWS';
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
  data: CreateNoticeRequest,
): Promise<AxiosResponse<NoticeApiResponse>> {
  return post<NoticeApiResponse, CreateNoticeRequest>({
    request: END_POINT.ADMIN.NOTICE_CREATE,
    data,
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
  return del<void>({
    request: END_POINT.ADMIN.NOTICE_DELETE(noticeId),
  });
}

export async function toggleNoticePinned(
  noticeId: number,
  data: TogglePinnedRequest,
): Promise<AxiosResponse<NoticeApiResponse>> {
  return patch<NoticeApiResponse, TogglePinnedRequest>({
    request: END_POINT.ADMIN.NOTICE_TOGGLE_PINNED(noticeId),
    data,
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
