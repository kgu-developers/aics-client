import type { TableProps } from 'antd';
import { Table } from 'antd';

import type { UploadRow } from '../types/studentAddModal';

type Props = {
  rows: UploadRow[];
  pageSize?: number;
  current: number;
  onPageChange: (page: number) => void;
  selectedRowKeys: React.Key[];
  onSelectionChange: (keys: React.Key[]) => void;
};

type Columns = NonNullable<TableProps<UploadRow>['columns']>;

const BASE_COLUMNS: Columns = [
  { title: 'No', dataIndex: 'key', width: 60 },
  { title: '학번', dataIndex: 'studentId' },
  { title: '이름', dataIndex: 'name' },
];

export default function PreviewTable({
  rows,
  pageSize = 7,
  current,
  onPageChange,
  selectedRowKeys,
  onSelectionChange,
}: Props) {
  const columns: Columns = [
    {
      ...BASE_COLUMNS[0],
      render: (_: unknown, __: UploadRow, idx: number) =>
        (current - 1) * pageSize + idx + 1,
    },
    BASE_COLUMNS[1],
    BASE_COLUMNS[2],
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectionChange,
  };

  return (
    <Table<UploadRow>
      size='small'
      dataSource={rows}
      columns={columns}
      rowSelection={rowSelection}
      pagination={{ pageSize, current, onChange: onPageChange }}
    />
  );
}
