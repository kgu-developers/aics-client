import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { DeptInfoSection } from '~/features/dept/components/dept-info-section'
import { DEPT_QUERY_OPTIONS } from '~/features/dept/services/queries'
import { PageHeader } from '~/shared/components/page-header/page-header'
import { getQueryClient } from '~/shared/utils/'

export const dynamic = 'force-dynamic'

export default function Dept() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(DEPT_QUERY_OPTIONS.ALL())

  return (
    <>
      <PageHeader
        title="학부 소개"
        description="경기대학교 AI컴퓨터공학부를 소개해요."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DeptInfoSection />
      </HydrationBoundary>
    </>
  )
}
