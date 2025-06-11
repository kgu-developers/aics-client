'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'isomorphic-dompurify'

import * as styles from '~/features/contact/components/content-info-section.css'
import { CONTACT_QUERY_OPTIONS } from '~/features/contact/services/queries'

function ContactInfoSection() {
  const { data } = useSuspenseQuery(CONTACT_QUERY_OPTIONS.ALL())

  return (
    <section
      className={styles.information}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
    />
  )
}

export { ContactInfoSection }
