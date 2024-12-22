import { queryOptions } from '@tanstack/react-query';

import { getBoardDetail, getBoards } from './remote';

interface PaginationOptions {
  page: number;
  size: number;
  keyword: string;
  category: string;
}

const queryKeys = {
  all: () => ['boards'],
  PAGE: (options: PaginationOptions) => [...queryKeys.all(), options],
  DETAIL: (postId: string) => [...queryKeys.all(), postId],
};

const boardQueryOptions = {
  all: ({
    page,
    size,
    keyword,
    category,
  }: { page: number; size: number; keyword: string; category: string }) =>
    queryOptions({
      queryKey: queryKeys.PAGE({ page, size, keyword, category }),
      queryFn: () => getBoards({ page, size, keyword, category }),
    }),
  detail: (postId: string) =>
    queryOptions({
      queryKey: queryKeys.DETAIL(postId),
      queryFn: () => getBoardDetail(postId),
    }),
};

export { boardQueryOptions };
