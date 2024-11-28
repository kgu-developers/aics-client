'use client';

import { useCallback, useEffect, useState } from 'react';

import { type Board, getBoards } from './remote';

import { PageHeader } from '~/components/page-header';

import { BoardList } from '~/components/board/list';
import { PageController } from '~/components/board/page-controller';
import { SearchBar } from '~/components/board/search-bar';

import * as styles from '~/app/board/notice/page.css';

export const dynamic = 'force-dynamic';

const SIZE = 10; // 페이지 당 데이터 수
const INITIAL_PAGE = 0; // 초기 페이지

export default function BoardPage() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [searchValue, setSearchValue] = useState({
    inputValue: '', // 검색창 입력 값
    activeValue: '', // 실제 검색에 사용되는 키워드
  });
  const [totalElements, setTotalElements] = useState(0);

  const fetchBoards = useCallback(async () => {
    try {
      const response = await getBoards(
        currentPage,
        SIZE,
        searchValue.activeValue,
        '공지사항',
      );
      const { contents, pagable } = response.data;

      if (contents) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setBoards(contents);
        setTotalElements(pagable.totalElements);
      }
    } catch (error) {
      console.error('게시판 데이터를 가져오는 중 오류가 발생했습니다.', error);
    }
  }, [currentPage, searchValue.activeValue]);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue((prev) => ({
      ...prev,
      inputValue: e.target.value,
    }));
  };

  const handleClickSearch = () => {
    setSearchValue((prev) => ({
      ...prev,
      activeValue: prev.inputValue,
    }));
    setCurrentPage(0);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue((prev) => ({
        ...prev,
        activeValue: prev.inputValue,
      }));
      setCurrentPage(0);
    }
  };

  return (
    <section>
      <PageHeader
        title="공지사항"
        description="학부와 관련된 중요한 공지사항을 안내해드려요."
      />

      <section className={styles.boardWrapper}>
        <SearchBar
          value={searchValue.inputValue}
          onChange={handleSearchChange}
          onClick={handleClickSearch}
          onKeyUp={handleKeyPress}
        />

        {boards.length > 0 ? (
          <BoardList>
            {boards.map((board) => (
              <BoardList.Row key={board.postId} board={board} />
            ))}
          </BoardList>
        ) : (
          <p>등록된 공지사항이 없습니다.</p>
        )}

        <PageController
          totalElements={totalElements}
          size={SIZE}
          currentPage={currentPage + 1}
          pageCount={5}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </section>
  );
}
