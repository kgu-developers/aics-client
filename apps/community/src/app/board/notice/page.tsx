import { PageHeader } from '~/components/page-header';

import { BoardList } from '~/components/board/board-list';
import { SearchBar } from '~/components/board/search-bar';

import * as styles from '~/app/board/notice/page.css';
import { Pagination } from '~/components/board/pagination';
import { getBoards } from './remote';

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

  const { data } = await getBoards(currentPage, 10, keyword, '공지사항');

  return (
    <section>
      <PageHeader
        title="공지사항"
        description="학부와 관련된 중요한 공지사항을 안내해드려요."
      />
      <section className={styles.boardWrapper}>
        <SearchBar placeholder="검색어를 입력하세요" />
        <BoardList data={data.contents} />
        <Pagination
          totalPage={data.pagable.totalPage}
          pageCount={5}
          currentPage={currentPage}
        />
      </section>
    </section>
  );
}
