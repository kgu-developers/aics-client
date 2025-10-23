import React from 'react'
import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

export type Column<T> = {
  key: string
  header: React.ReactNode
  width?: number | string
  align?: 'left' | 'center' | 'right'
  ellipsis?: boolean
  cell: (row: T) => React.ReactNode
}

type Id = string | number

type Props<T> = {
  rows: ReadonlyArray<T>
  columns: ReadonlyArray<Column<T>>
  getRowId: (row: T) => Id
  allChecked?: boolean
  onToggleAll?: () => void
  selectedIds?: ReadonlyArray<Id>
  onToggleOne?: (id: Id) => void
  emptyText?: React.ReactNode
  rowClassName?: (row: T, isSelected: boolean) => string | undefined
}

export default function DataTable<T>({
  rows,
  columns,
  getRowId,
  onToggleAll,
  onToggleOne,
  selectedIds = [],
  emptyText = '표시할 데이터가 없습니다.',
  rowClassName,
}: Props<T>) {
  const antdColumns = React.useMemo(() => {
    return columns.map((c) => ({
      key: c.key,
      title: c.header,
      dataIndex: c.key, 
      render: (_: unknown, record: T) => c.cell(record),
      align: c.align ?? 'center',
      width: c.width,
      ellipsis: c.ellipsis ?? false,
    })) as ColumnsType<T>
  }, [columns])

  const rowSelection: TableProps<T>['rowSelection'] =
    onToggleAll && onToggleOne
      ? {
          selectedRowKeys: selectedIds as React.Key[],
          onSelect: (record) => onToggleOne(getRowId(record)),
          onSelectAll: () => onToggleAll(),
        }
      : undefined

  return (
    <Table<T>
      dataSource={rows as T[]}
      columns={antdColumns}
      rowKey={(r) => getRowId(r) as React.Key}
      rowSelection={rowSelection}
      pagination={false}
      bordered
      sticky
      size="middle"
      locale={{ emptyText }}
      tableLayout="fixed"
      scroll={{ x: 'max-content' }}
      rowClassName={(record) => {
        const id = getRowId(record)
        const isSel = selectedIds.includes(id)
        return rowClassName?.(record, isSel) ?? ''
      }}
    />
  )
}
