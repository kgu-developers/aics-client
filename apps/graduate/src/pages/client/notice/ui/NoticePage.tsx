import { Table, Tag, Spin } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FileText } from 'lucide-react';

import { useNoticeList } from '~/shared/hooks/notice/useNoticeList';

import * as styles from '../styles/NoticePage.css';

interface NoticeDataType {
  key: number;
  noticeId: number;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  hasAttachment: boolean;
  isPinned: boolean;
}

export default function NoticePage() {
  const { data, isLoading } = useNoticeList({
    category: 'GRADUATION',
    page: 0,
    size: 50,
  });

  const columns: ColumnsType<NoticeDataType> = [
    {
      title: '번호',
      dataIndex: 'noticeId',
      key: 'noticeId',
      width: 80,
      align: 'center',
      responsive: ['md'],
      render: (_, record) =>
        record.isPinned ? (
          <Tag color='blue' style={{ margin: 0 }}>
            공지
          </Tag>
        ) : (
          record.noticeId
        ),
    },
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
      render: (title: string, record) => (
        <div className={styles.titleCell}>
          {record.isPinned && (
            <Tag color='blue' className={styles.mobilePinnedTag}>
              공지
            </Tag>
          )}
          <span className={styles.titleText}>{title}</span>
          {record.hasAttachment && (
            <FileText size={16} className={styles.attachmentIcon} />
          )}
        </div>
      ),
    },
    {
      title: '작성자',
      dataIndex: 'author',
      key: 'author',
      width: 120,
      align: 'center',
      responsive: ['lg'],
    },
    {
      title: '작성일',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 120,
      align: 'center',
      responsive: ['sm'],
      render: (date: string) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
      },
    },
    {
      title: '조회수',
      dataIndex: 'views',
      key: 'views',
      width: 100,
      align: 'center',
      responsive: ['md'],
    },
  ];

  const dataSource: NoticeDataType[] =
    data?.contents.map(notice => ({
      key: notice.noticeId,
      noticeId: notice.noticeId,
      title: notice.title,
      author: notice.author,
      createdAt: notice.createdAt,
      views: notice.views,
      hasAttachment: notice.hasAttachment,
      isPinned: notice.isPinned,
    })) || [];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <section className={styles.mainSection}>
        <h1 className={styles.noticeTitle}>공지사항</h1>

        {isLoading ? (
          <div className={styles.loadingContainer}>
            <Spin size='large' tip='로딩 중...' />
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={{
                pageSize: 10,
                showSizeChanger: false,
                showTotal: total => `전체 ${total}건`,
              }}
              className={styles.noticeTable}
              scroll={{ x: 'max-content' }}
              onRow={record => ({
                onClick: () => {
                  // TODO: 상세 페이지로 이동
                  console.log('Notice clicked:', record.noticeId);
                },
                style: { cursor: 'pointer' },
              })}
            />
          </div>
        )}
      </section>
    </div>
  );
}
