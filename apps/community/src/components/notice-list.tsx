import Link from 'next/link';
import * as styles from '~/components/notice-list.css';

const notices = [
  {
    id: 1,
    title: '테스트 공지 1',
    description:
      '테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다.',
  },
  {
    id: 2,
    title: '테스트 공지 2',
    description:
      '테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다.',
  },
  {
    id: 3,
    title: '테스트 공지 3',
    description:
      '테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다. 테스트용 공지입니다.',
  },
];

function NoticeList() {
  return (
    <section className={styles.notice}>
      <div className={styles.noticeHeader}>
        <div className={styles.title}>
          <Link href="/">공지 사항</Link>
        </div>
      </div>
      <ul className={styles.list}>
        {notices.map((post) => (
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
