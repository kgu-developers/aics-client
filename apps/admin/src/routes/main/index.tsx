import { createFileRoute } from '@tanstack/react-router'
import { Spin } from 'antd'
import { Suspense } from 'react'

import { PostSummaryList } from '~/features/main/components/PostSummaryList'
import { HeroCarousel } from '~/shared/components/HeroCarousel'

import { PATH } from '~/shared/constants/path'
import { useHeroImages, useNewsList, useNoticeList } from '~/shared/hooks'

export const Route = createFileRoute('/main/')({
  component: MainPage,
})

function MainPage() {
  const {
    data: { contents: heroContents },
  } = useHeroImages()
  const {
    data: { contents: noticeContents },
  } = useNoticeList({ page: 0, size: 5 })
  const {
    data: { contents: newsContents },
  } = useNewsList({ page: 0, size: 5 })
  return (
    <Suspense fallback={<Spin />}>
      <section className="flex flex-col gap-4">
        <HeroCarousel images={heroContents} />
        <div className="flex gap-4">
          <PostSummaryList
            title="공지사항"
            to={PATH.NOTICE}
            posts={noticeContents}
          />
          <PostSummaryList
            title="학부소식"
            to={PATH.NEWS}
            posts={newsContents}
          />
        </div>
      </section>
    </Suspense>
  )
}
