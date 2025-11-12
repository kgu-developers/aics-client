'use client';

import { ChevronLeft, ChevronRight } from '@aics-client/design-system/icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Fragment } from 'react';


import * as styles from '~/features/board/components/pagination.css';

interface Props {
  totalPage: number;
  currentPage: number;
  pageCount?: number;
}

const usePagination = ({ totalPage, pageCount = 5, currentPage }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const listStart = Math.floor(currentPage / pageCount) * pageCount + 1;
  const noPrev = listStart === 1;
  const noNext = listStart + pageCount - 1 >= totalPage;

  const handleMovePage = (pageNum: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', (pageNum - 1).toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    listStart,
    noPrev,
    noNext,
    handleMovePage,
  };
};

function PageButton({
  pageNum,
  isActive,
  onClick,
}: {
  pageNum: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      className={`${styles.pageButton} ${isActive && styles.active}`}
      onClick={onClick}
    >
      {pageNum}
    </button>
  );
}

function Pagination({ totalPage, pageCount = 5, currentPage }: Props) {
  const { listStart, noPrev, noNext, handleMovePage } = usePagination({
    totalPage,
    pageCount,
    currentPage,
  });

  return (
    <div className={styles.controllerWrapper}>
      <button
        type='button'
        onClick={() => handleMovePage(listStart - 1)}
        className={`${noPrev && styles.hidden}`}
      >
        <ChevronLeft />
      </button>

      {[...Array(pageCount)].map((_, i) => (
        <Fragment key={`page-${listStart + i}`}>
          {listStart + i <= totalPage && (
            <PageButton
              pageNum={listStart + i}
              isActive={currentPage + 1 === listStart + i}
              onClick={() => handleMovePage(listStart + i)}
            />
          )}
        </Fragment>
      ))}

      <button
        type='button'
        onClick={() => handleMovePage(listStart + pageCount)}
        className={`${noNext && styles.hidden}`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export { Pagination };
