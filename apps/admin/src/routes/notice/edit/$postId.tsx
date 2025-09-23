import { createFileRoute, useMatch } from '@tanstack/react-router'
import { usePostServiceGetApiV1PostsByPostIdSuspense } from '~/apis/community/queries/suspense'
import { PostForm } from '~/shared/components/Post'

export const Route = createFileRoute('/notice/edit/$postId')({
  component: PostEditPage,
})

function PostEditPage() {
  const { params } = useMatch({ from: '/notice/edit/$postId' })
  const { data: post } = usePostServiceGetApiV1PostsByPostIdSuspense({
    postId: Number(params.postId),
  })

  return <PostForm post={post} />
}
