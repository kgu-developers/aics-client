import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '~/utils/get-query-client';

import { BOARD_QUERY_OPTIONS } from '~/apis/board/queries';

import { PaginatedBoardList } from '~/components/board/paginated-board-list';
import { PageHeader } from '~/components/page-header';

import * as styles from '~/app/board/notice/page.css';
import { SearchBar } from '~/components/board/search-bar';

const SIZE = 10;
const CATEGORY = 'DEPT_NEWS';

export default async function NewsPage(props: {
  searchParams?: Promise<{
    category?: string;
    page?: string;
    keyword?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 0;
  const keyword = searchParams?.keyword || '';
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    BOARD_QUERY_OPTIONS.ALL({
      page: currentPage,
      size: 10,
      keyword: keyword,
      category: 'DEPT_INFO',
    }),
  );

  return (
    <section>
      <PageHeader
        title="학부소식"
        description="기사, 활동 및 수상 소식 등을 소개해요."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <section className={styles.boardWrapper}>
          <SearchBar placeholder="검색어를 입력하세요" />
          <PaginatedBoardList
            page={currentPage}
            size={SIZE}
            keyword={keyword}
            category={CATEGORY}
          />
        </section>
      </HydrationBoundary>
    </section>
  );
}
