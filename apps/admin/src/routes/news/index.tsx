import { createFileRoute, useSearch } from '@tanstack/react-router';
import { Suspense } from 'react';

import { usePostServiceGetApiV1PostsSuspense } from '~/apis/community/queries/suspense';

import PostsList from '~/components/posts/posts-list';
import { SearchBar } from '~/components/posts/search-bar';
import { PATH } from '~/constants/path';

export const Route = createFileRoute('/news/')({
  component: NewsListPage,
  validateSearch: (search: { page?: string; query?: string }) => ({
    page: Number(search.page) || 0,
    query: typeof search.query === 'string' ? search.query : '',
  }),
});

const CATEGORY = 'NEWS';
const LIST_SIZE = 10;

function NewsListPage() {
  const { page: currentPage, query: keywords } = useSearch({
    from: '/news/',
  });

  const { data: postList } = usePostServiceGetApiV1PostsSuspense({
    category: CATEGORY,
    size: LIST_SIZE,
    keywords: keywords,
    page: currentPage,
  });

  return (
    <section className="flex flex-col gap-3 px-16">
      <Suspense fallback={<div>loading...</div>}>
        <SearchBar defaultValue={keywords} />
        {postList?.contents && (
          <PostsList
            title="학부소식"
            to={PATH.NOTICE}
            currentPage={currentPage}
            data={postList.contents}
            total={postList.pageable.totalElements}
          />
        )}
      </Suspense>
    </section>
  );
}
