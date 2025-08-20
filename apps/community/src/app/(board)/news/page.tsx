import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import * as styles from '~/app/(board)/notice/page.css'
import { SearchBar } from '~/features/board/components/search-bar'
import { BOARD_QUERY_OPTIONS } from '~/features/board/services/queries'
import { PageHeader } from '~/shared/components/page-header/page-header'
import { getQueryClient } from '~/shared/utils/get-query-client'
import { PaginatedBoardList } from '~/widgets/board/components/paginated-board-list'

export const dynamic = 'force-dynamic'

const CATEGORY = 'NEWS'
const SIZE = 10

export default async function NewsPage(props: {
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
  )
}
