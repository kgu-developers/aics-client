import { Eye, Paperclip, Pin } from '@aics-client/design-system/icons';
import Link from 'next/link';
import type { Board } from '~/app/board/notice/remote';

import * as styles from '~/components/board/list.css';

interface Props {
  children: React.ReactNode;
}

function BoardList({ children }: Props) {
  return <ul className={styles.boardListWrapper}>{children}</ul>;
}

function Row({ board }: { board: Board }) {
  return (
    <Link href={`board/notice/${board.postId}`}>
      <li className={styles.row}>
        <div className={styles.pin}>
          {board.isPinned ? (
            <Pin fill="black" size={20} />
          ) : (
            <span>{board.postId}</span>
          )}
        </div>

        <div className={styles.rowTitle}>
          <h2>{board.title}</h2>
          {board.hasAttachment && <Paperclip color="grey" size={'0.75rem'} />}
        </div>

        <div className={styles.information}>
          <div className={styles.view}>
            <Eye size={'1rem'} />
            <span>{board.views}</span>
          </div>

          <div className={styles.author}>{board.author}</div>

          <div>{board.createAt}</div>
        </div>
      </li>
    </Link>
  );
}

BoardList.Row = Row;

export { BoardList };
