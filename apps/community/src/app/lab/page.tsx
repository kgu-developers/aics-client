import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { getQueryClient } from '~/shared/utils/get-query-client'

import { LABS_QUERY_OPTIONS } from '~/features/lab/services/queries'

import { PageHeader } from '~/components/page-header'

import { LabList } from '~/features/lab/components/lab-list'

//** TODO: for mocking */
export const dynamic = 'force-dynamic'

export default function LabPage() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(LABS_QUERY_OPTIONS.ALL())

  return (
    <>
      <PageHeader
        title="연구실 소개"
        description="경기대학교 AI컴퓨터공학부의 다양한 연구실을 소개해요."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LabList />
      </HydrationBoundary>
    </>
  )
}
