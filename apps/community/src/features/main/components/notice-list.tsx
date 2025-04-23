'use client'

import Link from 'next/link'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'

import * as styles from '~/features/main/components/notice-list.css'
import { MAIN_QUERY_OPTIONS } from '~/features/main/services/queries'
import { PATH } from '~/shared/constants/path'

function NoticeList() {
  const { data: recentNotices } = useSuspenseQuery(MAIN_QUERY_OPTIONS.NOTICES())

  return (
    <section className={styles.notice}>
      <div className={styles.noticeHeader}>
        <div className={styles.title}>
          <Link href={PATH.NOTICE}>공지 사항</Link>
        </div>
      </div>
      <ul className={styles.list}>
        {recentNotices.map((post) => (
          <li key={`notice-${post.postId}`}>
            <Link
              href={PATH.NOTICE_DETAIL(post.postId)}
              className={styles.post}
            >
              <h2 className={styles.postTitle}>{post.title}</h2>
              <div
                className={styles.postDescription}
                // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.description),
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NoticeList
