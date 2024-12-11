import Link from 'next/link';

import * as styles from '~/components/main/notice-list.css';

function NoticeList({ recentNotices }) {
  return (
    <section className={styles.notice}>
      <div className={styles.noticeHeader}>
        <div className={styles.title}>
          <Link href="/">공지 사항</Link>
        </div>
      </div>
      <ul className={styles.list}>
        {recentNotices.map((post) => (
          <li key={`notice-${post.id}`}>
            <Link href="/" className={styles.post}>
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
