import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '~/utils/get-query-client';

import { labsQueryOptions } from '~/apis/lab/queries';

import { PageHeader } from '~/components/page-header';

import { LabList } from '~/components/lab/lab-list';

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default function LabPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(labsQueryOptions.all());

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
  );
}
