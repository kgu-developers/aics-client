import { PageHeader } from '~/components/page-header';

import { BoardList } from '~/components/board/board-list';
import { SearchBar } from '~/components/board/search-bar';

import * as styles from '~/app/board/notice/page.css';

export const dynamic = 'force-dynamic';

export default async function BoardPage(props: {
  searchParams?: Promise<{
    category?: string;
    page?: string;
    keyword?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 0;
  const keyword = searchParams?.keyword || '';
  const category = '공지사항';
  const size = 10;

  return (
    <section>
      <PageHeader
        title="공지사항"
        description="학부와 관련된 중요한 공지사항을 안내해드려요."
      />

      <section className={styles.boardWrapper}>
        <SearchBar placeholder="검색어를 입력하세요" />

        <BoardList
          currentPage={currentPage}
          size={size}
          category={category}
          keyword={keyword}
        />
      </section>
    </section>
  );
}
