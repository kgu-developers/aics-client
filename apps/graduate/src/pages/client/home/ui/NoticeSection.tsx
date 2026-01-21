import { Link } from '@tanstack/react-router';
import { FileText } from 'lucide-react';

import { DataTable, Section } from '~/shared/components';
import { ROUTE } from '~/shared/constants';
import { useNoticeList } from '~/shared/hooks/notice/useNoticeList';

import * as styles from '../styles/HomePage.css';

type NoticeRow = {
  noticeId: number;
  title: string;
  author: string;
  createdAt: string;
  hasAttachment: boolean;
  isPinned: boolean;
};

export default function NoticeSection() {
  const { data, isLoading } = useNoticeList({
    category: 'GRADUATION',
    page: 0,
    size: 5,
  });

  const noticeRows: NoticeRow[] =
    data?.contents.map(notice => ({
      noticeId: notice.noticeId,
      title: notice.title,
      author: notice.author,
      createdAt: notice.createdAt,
      hasAttachment: notice.hasAttachment,
      isPinned: notice.isPinned,
    })) ?? [];

  const columns = [
    {
      key: 'title',
      header: '제목',
      width: '50%',
      align: 'left' as const,
      ellipsis: true,
      cell: (row: NoticeRow) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {row.isPinned && (
            <span
              style={{
                backgroundColor: '#006AE4',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              공지
            </span>
          )}
          <span>{row.title}</span>
          {row.hasAttachment && (
            <FileText size={14} style={{ color: '#A0A4B0', flexShrink: 0 }} />
          )}
        </div>
      ),
    },
    {
      key: 'author',
      header: '작성자',
      width: '20%',
      align: 'center' as const,
      cell: (row: NoticeRow) => row.author,
    },
    {
      key: 'createdAt',
      header: '작성일',
      width: '30%',
      align: 'center' as const,
      cell: (row: NoticeRow) => {
        const dateObj = new Date(row.createdAt);
        return dateObj.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
      },
    },
  ];

  return (
    <div className={styles.noticeSection}>
      <Section>
        <Section.Header
          subtitle='졸업 관련 공지사항을 확인해주세요.'
          action={
            <Link to={ROUTE.NOTICE} className={styles.noticeAction}>
              <p>더보기</p>
            </Link>
          }
        >
          공지사항
        </Section.Header>
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
            }}
          >
            로딩 중...
          </div>
        ) : (
          <DataTable
            rows={noticeRows}
            columns={columns}
            getRowId={row => row.noticeId}
          />
        )}
      </Section>
    </div>
  );
}
