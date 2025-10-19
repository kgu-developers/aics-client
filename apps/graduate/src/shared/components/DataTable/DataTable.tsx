import type { ReactNode } from 'react'
import * as style from '~/shared/components/DataTable/DataTable.css'

export type Column<T> = {
  key: string
  header: ReactNode
  thClassName?: string
  tdClassName?: string
  cell: (row: T) => ReactNode
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

  
  emptyText?: ReactNode
  
  rowClassName?: (row: T, isSelected: boolean) => string | undefined
}

export default function DataTable<T>({
  rows,
  columns,
  getRowId,
  allChecked = false,
  onToggleAll,
  selectedIds = [],
  onToggleOne,
  emptyText = '표시할 데이터가 없습니다.',
  rowClassName,
}: Props<T>) {
  const selectable = Boolean(onToggleAll && onToggleOne)

  return (
    <div className={style.tableWrap}>
      <table className={style.table}>
        <thead>
          <tr>
            {selectable && (
              <th className={`${style.th} ${style.thCheckbox}`}>
                <input
                  type="checkbox"
                  aria-label="select all"
                  checked={allChecked}
                  onChange={onToggleAll}
                  className={style.checkbox}
                />
              </th>
            )}
            {columns.map((c) => (
              <th key={c.key} className={`${style.th} ${c.thClassName ?? ''}`}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className={style.td} colSpan={columns.length + (selectable ? 1 : 0)}>
                {emptyText}
              </td>
            </tr>
          ) : (
            rows.map((row) => {
              const id = getRowId(row)
              const isSelected = selectedIds.includes(id)
              const trClass = `${style.row} ${isSelected ? style.selectedRow : ''} ${rowClassName?.(row, isSelected) ?? ''}`

              return (
                <tr key={String(id)} className={trClass}>
                  {selectable && (
                    <td className={style.td}>
                      <input
                        type="checkbox"
                        aria-label="row select"
                        checked={isSelected}
                        onChange={() => onToggleOne?.(id)}
                        className={style.checkbox}
                      />
                    </td>
                  )}
                  {columns.map((c) => (
                    <td key={c.key} className={`${style.td} ${c.tdClassName ?? ''}`}>
                      {c.cell(row)}
                    </td>
                  ))}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}
