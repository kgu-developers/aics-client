import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { MyInformation } from '~/features/profile/components/my-information'
import { MY_PROFILE_QUERY_OPTIONS } from '~/features/profile/services/queries'
import { PageHeader } from '~/shared/components/page-header/page-header'
import { getQueryClient } from '~/shared/utils/get-query-client'

export default function MyPage() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(MY_PROFILE_QUERY_OPTIONS.PROFILE())

  return (
    <>
      <PageHeader
        title="회원 정보"
        description="등록한 회원 정보를 확인할 수 있어요."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MyInformation />
      </HydrationBoundary>
    </>
  )
}
