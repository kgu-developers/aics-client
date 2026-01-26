export interface NoticeListParams {
  page?: number;
  size?: number;
  keywords?: string[];
  category?: 'GRADUATION';
}

export const noticeKeys = {
  all: ['notice'] as const,
  lists: () => [...noticeKeys.all, 'list'] as const,
  list: (params?: NoticeListParams) => [...noticeKeys.lists(), params] as const,
  details: () => [...noticeKeys.all, 'detail'] as const,
  detail: (id: number) => [...noticeKeys.details(), id] as const,
} as const;
