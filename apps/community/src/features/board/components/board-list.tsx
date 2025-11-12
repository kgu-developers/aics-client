import { Eye, Paperclip, Pin } from '@aics-client/design-system/icons';
import Link from 'next/link';


import { PATH } from '~/shared/constants/path';

import * as styles from '~/features/board/components/board-list.css';
import type { Post } from '~/features/main/services/remote';

function BoardList({ data }: { data: Post[] }) {
  if (data.length === 0) {
    return <EmptyBoardList />;
  }

  return (
    <ul className={styles.boardListWrapper}>
      {data.map(post => (
        <BoardListItem key={post.postId} post={post} />
      ))}
    </ul>
  );
}

function EmptyBoardList() {
  return <p>게시물이 존재하지 않습니다.</p>;
}

function BoardListItem({ post }: { post: Post }) {
  return (
    <Link href={PATH.NOTICE_DETAIL(post.postId)}>
      <li className={styles.row}>
        <PostIdentifier isPinned={post.isPinned} postId={post.postId} />
        <PostTitle title={post.title} hasAttachment={post.hasAttachment} />
        <PostInformation
          views={post.views}
          author={post.author}
          createdAt={post.createdAt}
        />
      </li>
    </Link>
  );
}

function PostIdentifier({
  isPinned,
  postId,
}: {
  isPinned: boolean;
  postId: number;
}) {
  return (
    <div className={styles.pin}>
      {isPinned ? <Pin fill='black' size={'1.25rem'} /> : <span>{postId}</span>}
    </div>
  );
}

function PostTitle({
  title,
  hasAttachment,
}: {
  title: string;
  hasAttachment: boolean;
}) {
  return (
    <div className={styles.rowTitle}>
      <h2>{title}</h2>
      {hasAttachment && <Paperclip color='grey' size={'1rem'} />}
    </div>
  );
}

function PostInformation({
  views,
  author,
  createdAt,
}: {
  views: number;
  author: string;
  createdAt: string;
}) {
  return (
    <div className={styles.information}>
      <div className={styles.view}>
        <Eye size={'1rem'} />
        <span>{views}</span>
      </div>
      <div className={styles.author}>{author}</div>
      <div>{createdAt}</div>
    </div>
  );
}

export { BoardList };
