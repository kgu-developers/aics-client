import { http } from '~/utils/http';

import { MOCK_END_POINT } from '~/constants/api';

import type { PaginationResponse } from '~/types/api';

interface Board {
  postId: number;
  title: string;
  author: string;
  views: number;
  category: string;
  hasAttachment: boolean;
  isPinned: boolean;
  createAt: string;
}

interface BoardParams {
  page: number;
  size: number;
  keyword?: string;
  category: string;
}

async function getBoards({ page, size, keyword = '', category }: BoardParams) {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    keyword: keyword,
    category: category,
  });

  const response = await http.get(
    `${MOCK_END_POINT.BOARD}?${params.toString()}`,
  );

  return response as PaginationResponse<Board>;
}

export { getBoards, type Board };
