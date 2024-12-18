import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { deptQueryOptions } from '~/apis/about/dept/queries';

import { getQueryClient } from '~/utils/get-query-client';

import { DeptInfoSection } from '~/components/about/dept/dept-info-section';
import { PageHeader } from '~/components/page-header';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function Dept() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(deptQueryOptions.all());

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
  );
}
