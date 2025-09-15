import { createFileRoute, useSearch } from '@tanstack/react-router'
import { Suspense } from 'react'

import { SearchBar } from '~/components/user/search-bar'
import { PostList } from '~/shared/components/Post'

import { PATH } from '~/constants/path'
import { useNewsList } from '~/shared/hooks'

export const Route = createFileRoute('/news/')({
  component: NewsListPage,
  validateSearch: (search: { page?: string; query?: string }) => ({
    page: Number(search.page) || 0,
    query: typeof search.query === 'string' ? search.query : '',
  }),
})

const LIST_SIZE = 10

function NewsListPage() {
  const { page: currentPage, query: keywords } = useSearch({
    from: '/news/',
  })

  const {
    data: {
      contents: newsContents,
      pageable: { totalElements: newsTotal },
    },
  } = useNewsList({
    size: LIST_SIZE,
    keywords: keywords,
    page: currentPage,
  })

  return (
    <section className="flex flex-col gap-3 px-16">
      <Suspense fallback={<div>loading...</div>}>
        <SearchBar defaultValue={keywords} />
        {newsContents && (
          <PostList
            title="학부소식"
            to={PATH.NEWS}
            currentPage={currentPage}
            data={newsContents}
            total={newsTotal}
          />
        )}
      </Suspense>
    </section>
  )
}
