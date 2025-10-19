import { useCallback, useEffect, useMemo, useState } from 'react'

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
    pageSize = 10,
    keys,
    getSearchValues,
    caseSensitive = false,
  } = opts

  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Id[]>([])

  
  const norm = useCallback(
    (s: unknown) => {
      const str = String(s ?? '')
      return caseSensitive ? str : str.toLowerCase()
    },
    [caseSensitive],
  )

 
  const extractValues = useCallback(
    (row: T) => {
      if (getSearchValues) return getSearchValues(row).map(norm)
      if (keys && keys.length > 0) return keys.map((k) => norm((row as any)[k]))
      return Object.values(row as any).map(norm)
    },
    [getSearchValues, keys, norm],
  )

  const filtered = useMemo(() => {
    if (!query) return rows
    const q = norm(query)
    return rows.filter((r) => extractValues(r).some((v) => v.includes(q)))
  }, [rows, query, norm, extractValues])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize)


  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [totalPages, page])


  const pageIds = useMemo(() => pageRows.map(getRowId), [pageRows, getRowId])

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
    toggleAll,
    toggleOne,
    resetToFirstPage,
  }
}
