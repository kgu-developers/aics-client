import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { getQueryClient } from '~/shared/utils/get-query-client'

import { BOARD_QUERY_OPTIONS } from '~/features/board/services/queries'

import { PageHeader } from '~/components/page-header'
import { PaginatedBoardList } from '~/features/board/components/paginated-board-list'
import { SearchBar } from '~/features/board/components/search-bar'

import * as styles from '~/app/(board)/notice/page.css'

//** TODO: for mocking */
export const dynamic = 'force-dynamic'

const SIZE = 10
const CATEGORY = 'NOTIFICATION'

export default async function NoticePage(props: {
  searchParams?: Promise<{
    category?: string
    page?: string
    keyword?: string
  }>
}) {
  const searchParams = await props.searchParams
  const currentPage = Number(searchParams?.page) || 0
  const keyword = searchParams?.keyword || ''
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    BOARD_QUERY_OPTIONS.ALL({
      page: currentPage,
      size: 10,
      keyword: keyword,
      category: CATEGORY,
    }),
  )

  return (
    <section>
      <PageHeader
        title="공지사항"
        description="학부와 관련된 중요한 공지사항을 안내해드려요."
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
  )
}
