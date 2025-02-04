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
  prevPost: {
    id: number;
    title: string;
  };
  nextPost: {
    id: number;
    title: string;
  };
}

/**
 *
 * @param {Object} params - 게시판 데이터를 가져오기 위한 파라미터입니다.
 * @param {number} params.page - 가져올 페이지 번호입니다.
 * @param {number} params.size - 한 페이지당 항목 수입니다.
 * @param {string} [params.keyword=''] - 게시판을 필터링할 키워드입니다.
 * @param {string} [params.category] - 게시판을 필터링할 카테고리입니다.
 * @returns {Promise<PaginationResponse<Board>>} - 게시판 리스트 포함된 페이지네이션을 반환합니다.
 */
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

/**
 * 게시판 상세글 정보를 가져옵니다.
 *
 * @param {string} id - 가져올 게시글의 ID입니다.
 * @returns {Promise<BoardDetail>} - 게시글의 세부 정보를 반환합니다.
 */
async function getBoardDetail(id: string) {
  return await http.get<BoardDetail>(`${MOCK_END_POINT.BOARD_DETAIL(id)}`);
}

export { getBoards, getBoardDetail, type Board, type BoardDetail };
