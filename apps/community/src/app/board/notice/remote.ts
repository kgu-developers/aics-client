import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

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

interface Pagable {
  page: number;
  size: number;
  totalPage: number;
  totalElements: number;
  isEnd: boolean;
}

interface ResponseData {
  contents: Board[];
  pagable: Pagable;
}

function getBoards(
  page: number,
  size: number,
  keyword: string,
  category: string,
) {
  const url = `${MOCK_END_POINT.BOARD}?page=${page}&size=${size}&keyword=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`;
  return http.get<ResponseData>(url);
}

export { type Board, type Pagable, type ResponseData, getBoards };
