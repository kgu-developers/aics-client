import { useEffect, useState } from 'react'

type Id = string | number

type Options<T> = {
  pageSize?: number
  keys?: (keyof T)[]
  getSearchValues?: (row: T) => Array<string | number>
  caseSensitive?: boolean
}

export default function useTableState<T>(
  rows: T[],
  getRowId: (row: T) => Id,
  opts: Options<T> = {},
) {
  const {
    pageSize: initialSize = 10,
    keys,
    getSearchValues,
    caseSensitive = false,
  } = opts

  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialSize)
  const [selected, setSelected] = useState<Id[]>([])

  const normalize = (s: unknown) => {
    const str = String(s ?? '')
    return caseSensitive ? str : str.toLowerCase()
  }

  const extractValues = (row: T) => {
    if (getSearchValues) return getSearchValues(row).map(normalize)
    if (keys && keys.length > 0)
      return keys.map((k) => normalize((row as any)[k]))
    return Object.values(row as any).map(normalize)
  }

  const filtered = query
    ? rows.filter((r) =>
        extractValues(r).some((v) => v.includes(normalize(query))),
      )
    : rows

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize)

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [totalPages, page])

  const pageIds = pageRows.map(getRowId)
  const allChecked =
    pageRows.length > 0 && pageIds.every((id) => selected.includes(id))
  const partiallyChecked =
    pageRows.length > 0 &&
    !allChecked &&
    pageIds.some((id) => selected.includes(id))

  const toggleAll = () => {
    setSelected((prev) =>
      allChecked
        ? prev.filter((id) => !pageIds.includes(id))
        : Array.from(new Set([...prev, ...pageIds])),
    )
  }

  const toggleOne = (id: Id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )

  const resetToFirstPage = () => setPage(1)

  return {
    query,
    page,
    pageSize,
    selected,
    filtered,
    pageRows,
    totalPages,
    allChecked,
    partiallyChecked,

    setQuery,
    setPage,
    setPageSize,
    toggleAll,
    toggleOne,
    resetToFirstPage,
  }
}
