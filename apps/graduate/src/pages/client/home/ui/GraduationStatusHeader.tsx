import { useNavigate } from '@tanstack/react-router';
import { Carousel } from 'antd';
import { Sparkles, Pin } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

import { useNoticeList } from '~/shared/hooks/notice/useNoticeList';

import * as styles from '../styles/HomePage.css';

interface GraduationStatusHeaderProps {
  title?: string;
  description?: string;
}

export default function GraduationStatusHeader({
  title,
  description,
}: GraduationStatusHeaderProps) {
  const navigate = useNavigate();
  const { data } = useNoticeList({
    category: 'GRADUATION',
    page: 0,
    size: 3,
  });

  const pinnedNotices = data?.contents.filter(notice => notice.isPinned) ?? [];

  const StatusSlide = () => {
    if (!title || !description) {
      return (
        <div className={styles.carouselSlide}>
          <div className={styles.headerTextWrapper}>
            <div className={styles.statusBadge}>
              <Sparkles size={14} />
              <span>준비 중</span>
            </div>
            <h1 className={styles.headerTitle}>졸업 일정 준비중</h1>
            <p className={styles.headerDescription}>
              아직 졸업 요건 취득 일정이 지정되지 않았어요.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.carouselSlide}>
        <div className={styles.headerTextWrapper}>
          <div className={styles.statusBadge}>
            <Sparkles size={14} />
            <span>내 상태</span>
          </div>
          <h1 className={styles.headerTitle}>{title}</h1>
          <p className={styles.headerDescription}>
            {description.split('\n').map(line => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.header}>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        dotPosition='bottom'
        dots
        effect='fade'
      >
        <StatusSlide />
        {pinnedNotices.map(notice => (
          <div
            key={notice.noticeId}
            className={styles.carouselSlide}
            onClick={() => navigate({ to: `/notice/${notice.noticeId}` })}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.headerTextWrapper}>
              <div className={styles.pinnedBadge}>
                <Pin size={14} fill='white' />
                <span>고정 공지</span>
              </div>
              <h1 className={styles.headerTitle}>{notice.title}</h1>
              <p className={styles.headerDescription}>{notice.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
