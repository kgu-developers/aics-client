import { useMemo, useState } from 'react'
import type { CertRow } from '~/features/certification-management/types/row'

export default function useCertificationTableState(rows: CertRow[], pageSize = 10) {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<number[]>([])

  const filtered = useMemo(() => {
    if (!query) return rows
    return rows.filter((r) =>
      [r.studentId, r.name, r.status, r.approved].some((v) => String(v).includes(query)),
    )
  }, [rows, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize)

  const allChecked = pageRows.length > 0 && pageRows.every((r) => selected.includes(r.id))

  const toggleAll = () => {
    if (allChecked) setSelected((prev) => prev.filter((id) => !pageRows.some((r) => r.id === id)))
    else setSelected((prev) => Array.from(new Set([...prev, ...pageRows.map((r) => r.id)])))
  }

  const toggleOne = (id: number) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

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
    
    setQuery,
    setPage,
    toggleAll,
    toggleOne,
    resetToFirstPage,
  }
}
