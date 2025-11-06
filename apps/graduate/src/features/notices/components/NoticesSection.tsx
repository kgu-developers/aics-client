import { useState } from 'react';
import { Table, Button, Input, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useNavigate } from '@tanstack/react-router';
import { Header } from '~/shared/components';

import * as style from './NoticesSection.css';
import type { NoticeItem } from '../types/notices';
import { mockData } from '../mock/notices';

export default function NoticesSection() {
	const [searchText, setSearchText] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	const pinnedData = [...mockData].sort((a, b) => {
		if (a.isPinned && !b.isPinned) return -1;
		if (!a.isPinned && b.isPinned) return 1;
		return b.id - a.id;
	});

	const columns: ColumnType<NoticeItem>[] = [
		{
			title: '번호',
			key: 'index',
			width: 100,
			align: 'center',
			render: (_, record) => {
				if (record.isPinned) {
					return <Tag color="red">공지</Tag>;
				}
				const index = pinnedData.findIndex(item => item.id === record.id);
				const pinnedCount = pinnedData.filter(item => item.isPinned).length;
				return index - pinnedCount + 1;
			},
		},
		{
			title: '제목',
			dataIndex: 'title',
			key: 'title',
			render: (text: string, record) => (
				<button
					type="button"
					onClick={() => handleRowClick(record)}
					className={record.isPinned ? style.pinnedTitleLink : style.normalTitleLink}
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
		navigate({ to: '/notices/$postId', params: { postId: record.id.toString() } });
	};

	const handleCreateNotice = () => {
		navigate({ to: '/notices/create' });
	};

	return (
		<div className={style.container}>
			<Header title="공지사항" />

			<div className={style.searchSection}>
				<Input
					placeholder="제목으로 검색"
					value={searchText}
					onChange={e => setSearchText(e.target.value)}
					className={style.searchInput}
					size="large"
					allowClear
				/>
				<Button type="primary" onClick={handleCreateNotice} size="large">
					공지 작성
				</Button>
			</div>

			<Table
				columns={columns}
				dataSource={pinnedData}
				rowKey="id"
				pagination={{
					current: currentPage,
					pageSize: 10,
					total: pinnedData.length,
					onChange: page => setCurrentPage(page),
					showSizeChanger: false,
					showTotal: total => `총 ${total}개`,
				}}
				bordered
			/>
		</div>
	);
}
