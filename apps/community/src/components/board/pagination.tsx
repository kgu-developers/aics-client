'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { ChevronLeft, ChevronRight } from '@aics-client/design-system/icons';

import * as styles from '~/components/board/pagination.css';

interface Props {
  totalPage: number; // 총 페이지 수
  pageCount: number; // 보여줄 페이지 장 수
  currentPage: number; // 현재 페이지
}

function Pagination({ totalPage, pageCount, currentPage }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPage;

  const handleMovePage = (pageNum: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', (pageNum - 1).toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (currentPage + 1 === start + pageCount)
      setStart((prev) => prev + pageCount);
    if (currentPage + 1 < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <div className={styles.controllerWrapper}>
      <button
        type="button"
        onClick={() => handleMovePage(start - pageCount)}
        className={`${noPrev && styles.hidden}`}
      >
        <ChevronLeft />
      </button>
      {[...Array(pageCount)].map((_, i) => (
        <Fragment key={`page-${start + i}`}>
          {start + i <= totalPage && (
            <button
              type="button"
              className={`${styles.pageButton} ${currentPage + 1 === start + i && styles.active}`}
              onClick={() => handleMovePage(start + i)}
            >
              {start + i}
            </button>
          )}
        </Fragment>
      ))}
      <button
        type="button"
        onClick={() => handleMovePage(start + pageCount)}
        className={`${noNext && styles.hidden}`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
export { Pagination };
