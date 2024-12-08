import { http } from '~/utils/http';

import { MOCK_END_POINT } from '~/constants/api';

import type { BaseResponse } from '~/types/api';

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

async function getBoardDetail(id: string) {
  return await http.get<BoardDetail>(`${MOCK_END_POINT.NOTICE_DETAIL(id)}`);
}

export { getBoardDetail, type BoardDetail };
