import { Carousel } from 'antd';

import { CAROUSEL_CONFIG, PAGINATION } from '~/shared/config';
import { useNoticeList } from '~/shared/hooks';

import PinnedNoticeSlide from './PinnedNoticeSlide';
import StatusSlide from './StatusSlide';
import * as styles from '../styles/HomePage.css';

interface GraduationStatusHeaderProps {
  /** 졸업 상태 제목 */
  title?: string;
  /** 졸업 상태 설명 */
  description?: string;
}

/**
 * 졸업 상태 헤더 컴포넌트
 * 사용자의 졸업 상태와 고정 공지사항을 캐러셀로 표시
 */
export default function GraduationStatusHeader({
  title,
  description,
}: GraduationStatusHeaderProps) {
  const { data } = useNoticeList({
    category: 'GRADUATION',
    page: 0,
    size: PAGINATION.PINNED_NOTICE_SIZE,
  });

  const pinnedNotices = data?.contents.filter(notice => notice.isPinned) ?? [];

  return (
    <section className={styles.header}>
      <Carousel
        autoplay
        autoplaySpeed={CAROUSEL_CONFIG.AUTOPLAY_SPEED}
        dotPosition='bottom'
        dots
        effect='fade'
      >
        <StatusSlide title={title} description={description} />
        {pinnedNotices.map(notice => (
          <PinnedNoticeSlide key={notice.noticeId} notice={notice} />
        ))}
      </Carousel>
    </section>
  );
}
