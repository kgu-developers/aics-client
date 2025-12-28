import { useNavigate } from '@tanstack/react-router';
import { Button, Input, Table, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useState } from 'react';

import { Header } from '~/shared/components';
import { useNoticeList } from '~/shared/hooks';

import type { NoticeItem } from '../model';
import * as style from '../styles/NoticeAdminPage.css';

export default function NoticeAdminPage() {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const {
    data: noticeResponse,
    isPending,
    isError,
  } = useNoticeList({
    page: currentPage - 1,
    size: 10,
    keywords: searchText ? [searchText] : undefined,
    category: 'GRADUATION',
  });

  const noticeList = noticeResponse?.contents || [];

  if (isError) {
    return (
      <div className={style.container}>
        <Header title='공지사항' />
        <div style={{ padding: '24px', textAlign: 'center' }}>
          <p>공지사항을 불러오는데 실패했습니다.</p>
          <Button type='primary' onClick={() => window.location.reload()}>
            다시 시도
          </Button>
        </div>
      </div>
    );
  }

  const columns: ColumnType<NoticeItem>[] = [
    {
      title: '번호',
      key: 'index',
      width: 100,
      align: 'center',
      render: (_, record) => {
        if (record.isPinned) {
          return <Tag color='red'>공지</Tag>;
        }
        const index = noticeList.findIndex(
          item => item.noticeId === record.noticeId,
        );
        const pinnedCount = noticeList.filter(item => item.isPinned).length;
        return index - pinnedCount + 1;
      },
    },
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record) => (
        <button
          type='button'
          onClick={() => handleRowClick(record)}
          className={
            record.isPinned ? style.pinnedTitleLink : style.normalTitleLink
          }
        >
          {text}
        </button>
      ),
    },
    {
      title: '작성자',
      dataIndex: 'author',
      key: 'author',
      width: 150,
      align: 'center',
    },

    {
      title: '작성일',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      align: 'center',
    },
  ];

  const handleRowClick = (record: NoticeItem) => {
    navigate({
      to: '/notice/$postId',
      params: { postId: record.noticeId.toString() },
    });
  };

  const handleCreateNotice = () => {
    navigate({ to: '/notice/create' });
  };

  return (
    <div className={style.container}>
      <Header title='공지사항' />

      <div className={style.searchSection}>
        <Input
          placeholder='제목으로 검색'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className={style.searchInput}
          size='large'
          allowClear
        />
        <Button type='primary' onClick={handleCreateNotice} size='large'>
          공지 작성
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={noticeList}
        rowKey='noticeId'
        loading={isPending}
        pagination={{
          current: currentPage,
          pageSize: 10,
          total: noticeResponse?.pageable.totalElements || 0,
          onChange: page => setCurrentPage(page),
          showSizeChanger: false,
          showTotal: total => `총 ${total}개`,
        }}
        bordered
      />
    </div>
  );
}
