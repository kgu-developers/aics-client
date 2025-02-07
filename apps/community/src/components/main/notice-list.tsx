'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { MAIN_QUERY_OPTIONS } from '~/apis/main/queries';
import * as styles from '~/components/main/notice-list.css';

function NoticeList() {
  const { data: recentNotices } = useSuspenseQuery(
    MAIN_QUERY_OPTIONS.NOTICES(),
  );

  return (
    <section className={styles.notice}>
      <div className={styles.noticeHeader}>
        <div className={styles.title}>
          <Link href="/">공지 사항</Link>
        </div>
      </div>
      <ul className={styles.list}>
        {recentNotices.map((post) => (
          <li key={`notice-${post.postId}`}>
            <Link href={`/board/notice/${post.postId}`} className={styles.post}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDescription}>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { NoticeList };
