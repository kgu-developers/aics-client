'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Fragment, useState } from 'react'

import { ChevronLeft, ChevronRight } from '@aics-client/design-system/icons'

import * as styles from '~/features/board/components/pagination.css'

interface Props {
  totalPage: number // 총 페이지 수
  currentPage: number // 현재 페이지
  pageCount?: number // 보여줄 페이지 장 수
}

function Pagination({ totalPage, pageCount = 5, currentPage }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialListStart = Math.floor(currentPage / pageCount) * pageCount + 1
  const [listStart, setListStart] = useState(initialListStart)

  const noPrev = listStart === 1
  const noNext = listStart + pageCount - 1 >= totalPage

  const handleMovePage = (pageNum: number) => {
    const newListStart =
      Math.ceil(pageNum / pageCount) * pageCount - (pageCount - 1)

    if (newListStart !== listStart) {
      setListStart(newListStart > 0 ? newListStart : 1)
    }

    const params = new URLSearchParams(searchParams)
    params.set('page', (pageNum - 1).toString())

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={styles.controllerWrapper}>
      <button
        type="button"
        onClick={() => handleMovePage(listStart - 1)}
        className={`${noPrev && styles.hidden}`}
      >
        <ChevronLeft />
      </button>
      {[...Array(pageCount)].map((_, i) => (
        <Fragment key={`page-${listStart + i}`}>
          {listStart + i <= totalPage && (
            <button
              type="button"
              className={`${styles.pageButton} ${
                currentPage + 1 === listStart + i && styles.active
              }`}
              onClick={() => handleMovePage(listStart + i)}
            >
              {listStart + i}
            </button>
          )}
        </Fragment>
      ))}
      <button
        type="button"
        onClick={() => handleMovePage(listStart + pageCount)}
        className={`${noNext && styles.hidden}`}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export { Pagination }
