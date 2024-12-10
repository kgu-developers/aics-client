import Link from 'next/link';

import { Eye, Paperclip, Pin } from '@aics-client/design-system/icons';

import { MOCK_END_POINT } from '~/constants/api';

import type { Board } from '~/app/board/remote';

import * as styles from '~/components/board/board-list.css';

async function BoardList({ data }: { data: Board[] }) {
  return (
    <>
      {data.length > 0 ? (
        <ul className={styles.boardListWrapper}>
          {data.map((row) => (
            <Row key={row.postId} data={row} />
          ))}
        </ul>
      ) : (
        <p>게시물이 존재하지 않습니다.</p>
      )}
    </>
  );
}

function Row({ data }: { data: Board }) {
  return (
    <Link href={`${MOCK_END_POINT.BOARD_DETAIL}/${data.postId}`}>
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
          {data.hasAttachment && <Paperclip color="grey" size={'1rem'} />}
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
