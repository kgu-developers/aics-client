import DOMPurify from 'dompurify'
import { isDirectionsEmpty } from '~/features/directions/constants/directions'
import type { DirectionsContent as DirectionsContentType } from '~/features/directions/types'

export default function DirectionsContent({
  content,
}: { content: DirectionsContentType }) {
  if (isDirectionsEmpty(content)) {
    return (
      <span className="border-y py-8 border-gray-200">
        작성된 안내가 없습니다.
      </span>
    )
  }

  return (
    <section
      className="border-y py-8 border-gray-200 flex flex-col gap-4"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: DOMPurify 적용
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content ?? '') }}
    />
  )
}
