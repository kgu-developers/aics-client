import Link from 'next/link';

import { Eye, Paperclip, Pin } from '@aics-client/design-system/icons';

import { PATH } from '~/constants/path';

import type { Post } from '~/apis/main/remote';

import * as styles from '~/components/board/board-list.css';

function BoardList({ data }: { data: Post[] }) {
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

function Row({ data }: { data: Post }) {
  return (
    <Link href={PATH.NOTICE_DETAIL(data.postId)}>
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
          <div>{data.createdAt}</div>
        </div>
      </li>
    </Link>
  );
}

export { BoardList };
