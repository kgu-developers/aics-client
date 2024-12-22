'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { boardQueryOptions } from '~/apis/board/queries';
import { BoardList } from './board-list';
import { Pagination } from './pagination';
import { SearchBar } from './search-bar';

interface Props {
  page: number;
  size: number;
  keyword: string;
  category: string;
}

function PaginatedBoardList({ page, size, keyword, category }: Props) {
  const { data } = useSuspenseQuery(
    boardQueryOptions.all({
      page: page,
      size: size,
      keyword: keyword,
      category: category,
    }),
  );

  return (
    <Suspense>
      <BoardList data={data.data.contents} />
      <Pagination totalPage={data.data.pagable.totalPage} currentPage={page} />
    </Suspense>
  );
}

export { PaginatedBoardList };
