import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { MY_PROFILE_QUERY_OPTIONS } from '~/apis/my/queries';

import { getQueryClient } from '~/utils/get-query-client';

import { MyInformation } from '~/components/my/my-information';
import { PageHeader } from '~/components/page-header';

export default function MyPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(MY_PROFILE_QUERY_OPTIONS.ALL());

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
  );
}
