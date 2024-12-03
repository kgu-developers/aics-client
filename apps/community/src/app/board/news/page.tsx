import { PageHeader } from '~/components/page-header';

import { BoardList } from '~/components/board/board-list';
import { SearchBar } from '~/components/board/search-bar';

import * as styles from '~/app/board/notice/page.css';
import { Pagination } from '~/components/board/pagination';
import { getBoards } from '../remote';

export const dynamic = 'force-dynamic';

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

  const { data } = await getBoards(currentPage, 10, keyword, 'DEPT_NEWS');

  return (
    <section>
      <PageHeader
        title="학부소식"
        description="기사, 활동 및 수상 소식 등을 소개해요."
      />
      <section className={styles.boardWrapper}>
        <SearchBar placeholder="검색어를 입력하세요" />
        <BoardList data={data.contents} />
        <Pagination
          totalPage={data.pagable.totalPage}
          currentPage={currentPage}
        />
      </section>
    </section>
  );
}
