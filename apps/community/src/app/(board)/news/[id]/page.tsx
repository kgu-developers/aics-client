import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { BOARD_QUERY_OPTIONS } from '~/features/board/services/queries'
import { getQueryClient } from '~/shared/utils/'
import { HydratedBoard } from '~/widgets/board/components/hydrated-board'

export const dynamic = 'force-dynamic'

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) {
  const postId = (await params).id
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(BOARD_QUERY_OPTIONS.DETAIL(postId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HydratedBoard postId={postId} />
    </HydrationBoundary>
  )
}
