import { Sparkles } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';

import * as styles from '../styles/HomePage.css';

interface StatusSlideProps {
  /** 제목 */
  title?: string;
  /** 설명 */
  description?: string;
}

/**
 * 졸업 상태 슬라이드 컴포넌트
 * 사용자의 현재 졸업 상태를 표시
 */
export default function StatusSlide({ title, description }: StatusSlideProps) {
  // 데이터가 없는 경우 기본 메시지 표시
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
}
