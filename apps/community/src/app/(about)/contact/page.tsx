import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { PageHeader } from '~/shared/components/page-header/page-header';
import { getQueryClient } from '~/shared/utils/';

import { ContactInfoSection } from '~/features/contact/components/contact-info-section';
import { CONTACT_QUERY_OPTIONS } from '~/features/contact/services/queries';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(CONTACT_QUERY_OPTIONS.ALL());

  return (
    <>
      <PageHeader
        title='찾아오시는 길'
        description='연락처와 위치를 알려드려요.'
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ContactInfoSection />
      </HydrationBoundary>
    </>
  );
}
