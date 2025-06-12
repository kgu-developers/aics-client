'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { DEPT_QUERY_OPTIONS } from '~/features/dept/services/queries'
import { TiptapContentSection } from '~/shared/components/tiptap-content-section/tiptap-content-section'

function DeptInfoSection() {
  const { data } = useSuspenseQuery(DEPT_QUERY_OPTIONS.ALL())

  return <TiptapContentSection content={data.content} />
}

export { DeptInfoSection }
