import { createFileRoute } from '@tanstack/react-router'
import { WriteNewPostField } from '~/components/posts/write-new-post-field'

export const Route = createFileRoute('/notice/new/')({
  component: NoticePostPage,
})

function NoticePostPage() {
  return <WriteNewPostField />
}
