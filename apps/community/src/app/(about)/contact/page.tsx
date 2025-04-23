import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { CONTACT_QUERY_OPTIONS } from '~/features/contact/services/queries'
import { getQueryClient } from '~/shared/utils/get-query-client'
import { ContactList } from '~/features/contact/components/contact-list'
import { PageHeader } from '~/shared/components/page-header/page-header'

export default function ContactPage() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(CONTACT_QUERY_OPTIONS.ALL())

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
  )
}
