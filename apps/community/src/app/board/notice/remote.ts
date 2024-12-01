import { http } from '~/utils/http';

import { MOCK_END_POINT } from '~/constants/api';

import type { PaginationResponse } from '~/types/api';

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

  const url = `${MOCK_END_POINT.BOARD}?${params.toString()}`;

  return await http.get<PaginationResponse>(url);
}

export { getBoards };
