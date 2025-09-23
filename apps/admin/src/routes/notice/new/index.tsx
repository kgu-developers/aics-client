import { createFileRoute } from '@tanstack/react-router'
import { PostForm } from '~/shared/components/Post'

export const Route = createFileRoute('/notice/new/')({
  component: NoticePostPage,
})

function NoticePostPage() {
  return <PostForm />
}
