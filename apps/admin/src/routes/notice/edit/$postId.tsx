import { createFileRoute, useMatch } from '@tanstack/react-router'
import { usePostServiceGetApiV1PostsByPostIdSuspense } from '~/apis/community/queries/suspense'
import { EditPostField } from '~/components/posts/edit-post-field'

export const Route = createFileRoute('/notice/edit/$postId')({
  component: PostEditPage,
})

function PostEditPage() {
  const { params } = useMatch({ from: '/notice/edit/$postId' })
  const { data: post } = usePostServiceGetApiV1PostsByPostIdSuspense({
    postId: Number(params.postId),
  })

  return <EditPostField post={post} />
}
