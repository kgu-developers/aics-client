'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'isomorphic-dompurify'

import { DEPT_QUERY_OPTIONS } from '~/features/dept/services/queries'

function DeptInfoSection() {
  const { data } = useSuspenseQuery(DEPT_QUERY_OPTIONS.ALL())

  return (
    <section>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
      />
    </section>
  )
}

export { DeptInfoSection }
