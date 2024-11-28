import { ChevronLeft, ChevronRight } from '@aics-client/design-system/icons';
import { Fragment, useEffect, useState } from 'react';

import * as styles from '~/components/board/page-controller.css';

/**
 * PageController 컴포넌트
 *
 * 페이지네이션 컨트롤러로, 주어진 데이터의 총 개수와 페이지 설정에 따라
 * 현재 페이지를 이동하거나 표시합니다.
 *
 * @param {Object} props - 컴포넌트의 props.
 * @param {number} props.totalElements - 데이터의 총 개수.
 * @param {number} props.size - 페이지당 보여줄 row의 개수.
 * @param {number} props.pageCount - 화면에 보여줄 페이지 번호 리스트의 개수.
 * @param {number} props.currentPage - 현재 페이지.
 * @param {function(number): void} props.setCurrentPage - 현재 페이지를 변경하기 위한 함수.
 *
 * @returns {JSX.Element} 페이지 컨트롤러 UI를 렌더링합니다.
 */

interface Props {
  totalElements: number; // 데이터의 총 개수
  size: number; // 페이지 당 보여줄 데이터 개수
  pageCount: number; // 보여줄 페이지 개수
  currentPage: number; // 현재 페이지
  setCurrentPage: (page: number) => void;
}

function PageController({
  totalElements,
  size,
  pageCount,
  currentPage,
  setCurrentPage,
}: Props) {
  const totalPages = Math.ceil(totalElements / size);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <div className={styles.controllerWrapper}>
      <button
        type="button"
        onClick={() => setCurrentPage(start - pageCount - 1)}
        className={`${noPrev && styles.hidden}`}
      >
        <ChevronLeft />
      </button>

      {[...Array(pageCount)].map((_, i) => (
        <Fragment key={`page-${start + i}`}>
          {start + i <= totalPages && (
            <button
              type="button"
              onClick={() => setCurrentPage(start + i - 1)}
              className={`${styles.pageButton} ${currentPage === start + i && styles.active}`}
            >
              {start + i}
            </button>
          )}
        </Fragment>
      ))}

      <button
        type="button"
        onClick={() => setCurrentPage(start + pageCount - 1)}
        className={`${noNext && styles.hidden}`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
export { PageController };
