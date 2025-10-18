import { useMemo, useState } from 'react'
import * as style from './Pagination.css'

type Props = {
  page: number
  totalPages: number
  onGoto: (page: number) => void
}

export default function Pagination({ page, totalPages, onGoto }: Props) {
  const [jump, setJump] = useState<string>(String(page))

  const pageNumbers = useMemo(() => {
    const windowSize = 5
    if (totalPages <= windowSize) return Array.from({ length: totalPages }, (_, i) => i + 1)
    let start = page - Math.floor(windowSize / 2)
    let end = page + Math.floor(windowSize / 2)
    if (start < 1) { start = 1; end = windowSize }
    else if (end > totalPages) { end = totalPages; start = totalPages - windowSize + 1 }
    const arr: number[] = []
    for (let i = start; i <= end; i++) arr.push(i)
    return arr
  }, [page, totalPages])

  const gotoSafe = (p: number | string) => {
    const n = typeof p === 'string' ? Number.parseInt(p, 10) : p
    if (Number.isNaN(n)) return
    const clamped = Math.max(1, Math.min(totalPages, Math.trunc(n)))
    onGoto(clamped)
    setJump(String(clamped))
  }

  return (
    <div className={style.footer}>
      <div className={style.right}>
        <div className={style.pager}>
          {pageNumbers.map((n) => {
            const active = n === page
            return (
              <button
                key={n}
                type="button"
                onClick={() => gotoSafe(n)}
                className={`${style.pagerBtn} ${active ? style.pagerBtnActive : ''}`}
              >
                {n}
              </button>
            )
          })}
        </div>

        <div className={style.pageJumpInline}>
          <input
            type="text"
            inputMode="numeric"
            value={jump}
            onChange={(e) => {
              const onlyDigits = e.target.value.replace(/[^\d]/g, '')
              const normalized = onlyDigits.replace(/^0+(?=\d)/, '')
              setJump(normalized)
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') gotoSafe(jump) }}
            className={style.pageJumpInput}
            aria-label="원하는 페이지 번호 입력"
          />
          <span className={style.pageTotalText}>/ {totalPages} pages</span>
        </div>
      </div>
    </div>
  )
}
