import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { CLUB_QUERY_OPTIONS } from '~/features/club/services/queries';

import { getQueryClient } from '~/shared/utils/get-query-client';

import { PageHeader } from '~/components/page-header';
import { ClubList } from '~/features/club/components/club-list';

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default function ClubPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(CLUB_QUERY_OPTIONS.ALL());

  return (
    <>
      <PageHeader
        title="동아리 소개"
        description="경기대학교 AI컴퓨터공학부의 연구실을 소개해요."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClubList />
      </HydrationBoundary>
    </>
  );
}
