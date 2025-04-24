'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'

import { CONTACT_QUERY_OPTIONS } from '~/features/contact/services/queries'

function ContactInfoSection() {
  const { data } = useSuspenseQuery(CONTACT_QUERY_OPTIONS.ALL())
  return (
    <section>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
      />
    </section>
  )
}

export { ContactInfoSection }
