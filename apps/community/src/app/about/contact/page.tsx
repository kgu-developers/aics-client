import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { clubQueryOptions } from '~/apis/about/club/queries';

import { getQueryClient } from '~/utils/get-query-client';

import { ContactList } from '~/components/about/contact/contact-list';
import { PageHeader } from '~/components/page-header';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(clubQueryOptions.all());

  return (
    <>
      <PageHeader
        title="찾아오시는 길"
        description="연락처와 위치를 알려드려요."
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ContactList />
      </HydrationBoundary>
    </>
  );
}
