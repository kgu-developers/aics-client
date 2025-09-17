import { createFileRoute, useMatch } from '@tanstack/react-router'

import { PostForm } from '~/shared/components/Post/PostForm'

import { usePostDetail } from '~/shared/hooks/Post'

export const Route = createFileRoute('/news/edit/$postId')({
  component: PostEditPage,
})

function PostEditPage() {
  const { params } = useMatch({ from: '/news/edit/$postId' })
  const { data: post } = usePostDetail({
    postId: Number(params.postId),
  })

  return <PostForm post={post} />
}
