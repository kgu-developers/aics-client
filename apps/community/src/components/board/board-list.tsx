import Link from 'next/link';

import { Eye, Paperclip, Pin } from '@aics-client/design-system/icons';

import type { Board } from '~/types/board';

import { getBoards } from '~/app/board/notice/remote';

import { Pagination } from './pagination';

import * as styles from '~/components/board/board-list.css';

interface Props {
  currentPage: number;
  size: number;
  category: string;
  keyword: string;
}

async function BoardList({ currentPage, size, category, keyword }: Props) {
  const { data } = await getBoards(currentPage, size, keyword, category);

  return (
    <>
      {data.contents.length > 0 ? (
        <ul className={styles.boardListWrapper}>
          {data.contents.map((row) => (
            <Row key={row.postId} data={row} />
          ))}
        </ul>
      ) : (
        <p>게시물이 존재하지 않습니다.</p>
      )}

      <Pagination totalPage={data.pagable.totalPage} pageCount={5} />
    </>
  );
}

function Row({ data }: { data: Board }) {
  return (
    <Link href={`board/notice/detail/${data.postId}`}>
      <li className={styles.row}>
        <div className={styles.pin}>
          {data.isPinned ? (
            <Pin fill="black" size={'1.25rem'} />
          ) : (
            <span>{data.postId}</span>
          )}
        </div>

        <div className={styles.rowTitle}>
          <h2>{data.title}</h2>
          {data.hasAttachment && <Paperclip color="grey" size={'0.75rem'} />}
        </div>

        <div className={styles.information}>
          <div className={styles.view}>
            <Eye size={'1rem'} />
            <span>{data.views}</span>
          </div>

          <div className={styles.author}>{data.author}</div>

          <div>{data.createAt}</div>
        </div>
      </li>
    </Link>
  );
}

export { BoardList };
