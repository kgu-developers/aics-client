import { Link, useNavigate } from '@tanstack/react-router';
import { ChevronRight, FileText } from 'lucide-react';

import { EmptyState } from '~/shared/components';
import { ROUTE, PAGINATION, EMPTY_MESSAGES } from '~/shared/constants';
import { useNoticeList } from '~/shared/hooks/notice/useNoticeList';

import * as styles from '../styles/HomePage.css';

export default function NoticeSection() {
  const navigate = useNavigate();
  const { data, isLoading } = useNoticeList({
    category: 'GRADUATION',
    page: 0,
    size: PAGINATION.RECENT_NOTICE_SIZE,
  });

  const notices = data?.contents ?? [];

  return (
    <div className={styles.noticeSection}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <div>
          <h2 className={styles.headerText}>공지사항</h2>
          <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
            졸업 관련 공지사항을 확인해주세요.
          </p>
        </div>
        <Link to={ROUTE.NOTICE} className={styles.noticeAction}>
          <span>더보기</span>
          <ChevronRight size={16} />
        </Link>
      </div>

      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
            color: '#9CA3AF',
          }}
        >
          로딩 중...
        </div>
      ) : (
        <div className={styles.noticeList}>
          {notices.map(notice => (
            <div
              key={notice.noticeId}
              className={styles.noticeItem}
              onClick={() => navigate({ to: `/notice/${notice.noticeId}` })}
            >
              <div className={styles.noticeTop}>
                {notice.isPinned && (
                  <span className={styles.noticeBadge}>공지</span>
                )}
                <span className={styles.noticeTitle}>{notice.title}</span>
                {notice.hasAttachment && (
                  <FileText
                    size={14}
                    style={{ color: '#A0A4B0', flexShrink: 0 }}
                  />
                )}
              </div>
              <div className={styles.noticeBottom}>
                <span>{notice.author}</span>
                <span>
                  {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))}
          {notices.length === 0 && (
            <EmptyState message={EMPTY_MESSAGES.NOTICE} iconSize={48} />
          )}
        </div>
      )}
    </div>
  );
}
