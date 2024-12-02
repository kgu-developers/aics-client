import { http } from '~/utils/http';

import { MOCK_END_POINT } from '~/constants/api';

import type { PaginationResponse } from '~/types/api';
import type { Board } from '~/types/board';

async function getBoards(
  page: number,
  size: number,
  keyword: string,
  category: string,
) {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    keyword: keyword,
    category: category,
  });

  return http.get<PaginationResponse<Board>>(
    `${MOCK_END_POINT.BOARD}?${params.toString()}`,
  );
}

export { getBoards };
