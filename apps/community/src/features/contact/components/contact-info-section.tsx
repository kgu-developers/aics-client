'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { TiptapContentSection } from '~/shared/components/tiptap-content-section/tiptap-content-section';

import { CONTACT_QUERY_OPTIONS } from '~/features/contact/services/queries';

function ContactInfoSection() {
  const { data } = useSuspenseQuery(CONTACT_QUERY_OPTIONS.ALL());

  return <TiptapContentSection content={data.content} />;
}

export { ContactInfoSection };
