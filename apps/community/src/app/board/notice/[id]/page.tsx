import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '~/utils/get-query-client';

import { BOARD_QUERY_OPTIONS } from '~/apis/board/queries';

import { HydrateBoard } from '~/components/board/hydrate-board';

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(BOARD_QUERY_OPTIONS.DETAIL(postId));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HydrateBoard postId={postId} />
    </HydrationBoundary>
  );
}
