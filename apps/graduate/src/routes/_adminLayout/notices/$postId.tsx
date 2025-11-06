import { createFileRoute } from '@tanstack/react-router'
import { NoticeForm } from '~/features/notices/components'

export const Route = createFileRoute('/_adminLayout/notices/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  return <NoticeForm noticeId={Number(postId)} />
}
