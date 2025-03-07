import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { PROFESSORS_QUERY_OPTIONS } from '~/apis/member/professor/queries';

import { getQueryClient } from '~/utils/get-query-client';

import { ProfessorList } from '~/components/member/professor/professor-list';
import { PageHeader } from '~/components/page-header';

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default function ProfessorPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(PROFESSORS_QUERY_OPTIONS.ALL());

  return (
    <section>
      <PageHeader
        title="교수진 소개"
        description="경기대학교 AI컴퓨터공학부의 교수진을 소개해요"
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfessorList />
      </HydrationBoundary>
    </section>
  );
}
