'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';


import { BoardList } from '~/features/board/components/board-list';
import { Pagination } from '~/features/board/components/pagination';
import { BOARD_QUERY_OPTIONS } from '~/features/board/services/queries';

interface Props {
  page: number;
  size: number;
  keyword: string;
  category: string;
}

function PaginatedBoardList({ page, size, keyword, category }: Props) {
  const { data } = useSuspenseQuery(
    BOARD_QUERY_OPTIONS.ALL({
      page: page,
      size: size,
      keyword: keyword,
      category: category,
    }),
  );

  return (
    <Suspense>
      <BoardList data={data.contents} />
      <Pagination totalPage={data.pageable.totalPages} currentPage={page} />
    </Suspense>
  );
}

export { PaginatedBoardList };
