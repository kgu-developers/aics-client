'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'isomorphic-dompurify'

import * as styles from '~/features/dept/components/dept-info-section.css'
import { DEPT_QUERY_OPTIONS } from '~/features/dept/services/queries'

function DeptInfoSection() {
  const { data } = useSuspenseQuery(DEPT_QUERY_OPTIONS.ALL())

  return (
    <section
      className={styles.information}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
    />
  )
}

export { DeptInfoSection }
