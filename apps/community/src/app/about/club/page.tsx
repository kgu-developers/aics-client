import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { clubQueryOptions } from '~/apis/about/club/queries';

import { getQueryClient } from '~/utils/get-query-client';

import { ClubList } from '~/components/about/club/club-list';
import { PageHeader } from '~/components/page-header';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function ClubPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(clubQueryOptions.all());

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
