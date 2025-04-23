import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { HydrateBoard } from '~/features/board/components/hydrate-board'
import { BOARD_QUERY_OPTIONS } from '~/features/board/services/queries'
import { getQueryClient } from '~/shared/utils/get-query-client'

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const postId = (await params).id
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(BOARD_QUERY_OPTIONS.DETAIL(postId))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HydrateBoard postId={postId} />
    </HydrationBoundary>
  )
}
