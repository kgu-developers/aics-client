import DOMPurify from 'dompurify'
import type { DeptIntroContent as DeptIntroContentType } from '~/features/dept/types'
import {
  isDeptIntroEmpty,
  DEPT_INTRO_MESSAGES,
} from '~/features/dept/constants/deptIntro'

export default function DeptIntroContent({
  content,
}: { content: DeptIntroContentType }) {
  const html = content ?? ''

  if (isDeptIntroEmpty(content)) {
    return (
      <span className="border-y py-8 border-gray-200">
        {DEPT_INTRO_MESSAGES.nullError}
      </span>
    )
  }

  return (
    <section
      className="border-y py-8 border-gray-200 flex flex-col gap-4"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  )
}
