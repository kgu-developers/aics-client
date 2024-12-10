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

interface BoardDetail {
  postId: number;
  category: string;
  title: string;
  content: string;
  author: string;
  views: number;
  isPinned: false;
  file: {
    logicalName: string;
    physicalPath: string;
  };
  createdAt: string;
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

async function getBoardDetail(id: string) {
  return await http.get<BoardDetail>(`${MOCK_END_POINT.BOARD_DETAIL(id)}`);
}

export { getBoards, getBoardDetail, type Board, type BoardDetail };
