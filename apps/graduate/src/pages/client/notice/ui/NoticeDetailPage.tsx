import { useNavigate } from '@tanstack/react-router';
import { Spin, Button, Divider, Tag } from 'antd';
import { ArrowLeft, FileText, Download } from 'lucide-react';

import { useNoticeDetail } from '~/shared/hooks/notice/useNoticeList';

import * as styles from '../styles/NoticeDetailPage.css.ts';

interface NoticeDetailPageProps {
  noticeId: number;
}

export default function NoticeDetailPage({ noticeId }: NoticeDetailPageProps) {
  const navigate = useNavigate();
  const { data: notice, isLoading } = useNoticeDetail(noticeId);

  const handleBack = () => {
    navigate({ to: '/notice' });
  };

  const handleDownload = () => {
    if (notice?.file?.physicalPath) {
      window.open(notice.file.physicalPath, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <section className={styles.mainSection}>
          <div className={styles.loadingContainer}>
            <Spin size='large' tip='로딩 중...' />
          </div>
        </section>
      </div>
    );
  }

  if (!notice) {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <section className={styles.mainSection}>
          <div className={styles.errorContainer}>
            <p>공지사항을 찾을 수 없습니다.</p>
            <Button onClick={handleBack}>목록으로 돌아가기</Button>
          </div>
        </section>
      </div>
    );
  }

  const createdDate = new Date(notice.createdAt);
  const formattedDate = createdDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <section className={styles.mainSection}>
        <div className={styles.backButtonWrapper}>
          <Button
            type='text'
            icon={<ArrowLeft size={20} />}
            onClick={handleBack}
            className={styles.backButton}
          >
            목록으로
          </Button>
        </div>

        <div className={styles.noticeContainer}>
          <div className={styles.noticeHeader}>
            <div className={styles.titleWrapper}>
              {notice.isPinned && (
                <Tag color='blue' className={styles.pinnedTag}>
                  공지
                </Tag>
              )}
              <h1 className={styles.noticeTitle}>{notice.title}</h1>
            </div>

            <div className={styles.metaInfo}>
              <span className={styles.metaItem}>
                <strong>작성자:</strong> {notice.author}
              </span>
              <span className={styles.metaDivider}>|</span>
              <span className={styles.metaItem}>
                <strong>작성일:</strong> {formattedDate}
              </span>
            </div>
          </div>

          <Divider className={styles.divider} />

          {notice.file && (
            <div className={styles.attachmentSection}>
              <div className={styles.attachmentInfo}>
                <FileText size={18} />
                <span>첨부파일</span>
              </div>
              <Button
                type='primary'
                icon={<Download size={16} />}
                onClick={handleDownload}
                size='small'
              >
                다운로드
              </Button>
            </div>
          )}

          <div
            className={styles.noticeContent}
            dangerouslySetInnerHTML={{ __html: notice.content }}
          />
        </div>
      </section>
    </div>
  );
}
