import { useNavigate } from '@tanstack/react-router';
import { Pin } from 'lucide-react';

import * as styles from '../styles/HomePage.css';

import { type NoticeItem } from '~/admin/pages/notice/model';

interface PinnedNoticeSlideProps {
  /** 고정 공지사항 데이터 */
  notice: NoticeItem;
}

/**
 * 고정 공지사항 슬라이드 컴포넌트
 * 캐러셀에서 고정된 공지사항을 표시
 */
export default function PinnedNoticeSlide({ notice }: PinnedNoticeSlideProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: `/notice/${notice.noticeId}` });
  };

  return (
    <div
      className={styles.carouselSlide}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.headerTextWrapper}>
        <div className={styles.pinnedBadge}>
          <Pin size={14} fill='white' />
          <span>고정 공지</span>
        </div>
        <h1 className={styles.headerTitle}>{stripHtmlTags(notice.title)}</h1>
        <p className={styles.headerDescription}>
          {stripHtmlTags(notice.description)}
        </p>
      </div>
    </div>
  );
}

const stripHtmlTags = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
