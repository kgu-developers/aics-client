import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '~/utils/get-query-client';

import { boardQueryOptions } from '~/apis/board/queries';

import { HydrateBoard } from '~/components/board/hydrate-board';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(boardQueryOptions.detail(postId));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HydrateBoard postId={postId} />
    </HydrationBoundary>
  );
}
