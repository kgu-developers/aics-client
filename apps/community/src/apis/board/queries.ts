import { queryOptions } from '@tanstack/react-query';

import { getBoardDetail, getPosts } from './remote';

interface PaginationOptions {
  page: number;
  size: number;
  keyword: string;
  category: string;
}

const BOARD_QUERY_KEYS = {
  ALL: () => ['boards'],
  PAGES: () => [...BOARD_QUERY_KEYS.ALL(), 'pages'],
  PAGE: (options: PaginationOptions) => [...BOARD_QUERY_KEYS.PAGES(), options],
  DETAILS: () => [...BOARD_QUERY_KEYS.ALL(), 'details'],
  DETAIL: (postId: string) => [...BOARD_QUERY_KEYS.DETAILS(), postId],
} as const;

const BOARD_QUERY_OPTIONS = {
  ALL: ({
    page,
    size,
    keyword,
    category,
  }: { page: number; size: number; keyword: string; category: string }) =>
    queryOptions({
      queryKey: BOARD_QUERY_KEYS.PAGE({ page, size, keyword, category }),
      queryFn: () => getPosts({ page, size, keyword, category }),
    }),
  DETAIL: (postId: string) =>
    queryOptions({
      queryKey: BOARD_QUERY_KEYS.DETAIL(postId),
      queryFn: () => getBoardDetail(postId),
    }),
};

export { BOARD_QUERY_KEYS, BOARD_QUERY_OPTIONS };
