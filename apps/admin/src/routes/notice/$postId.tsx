import { createFileRoute, useMatch } from '@tanstack/react-router'
import { usePostServiceGetApiV1PostsByPostIdSuspense } from '~/apis/community/queries/suspense'
import { Board } from '~/shared/components/Post'
import { PATH } from '~/shared/constants/path'

export const Route = createFileRoute('/notice/$postId')({
  component: PostDetailPage,
})

function PostDetailPage() {
  const { params } = useMatch({ from: '/notice/$postId' })
  const { data } = usePostServiceGetApiV1PostsByPostIdSuspense({
    postId: Number(params.postId),
  })

  return (
    <section className="px-16">
      <Board>
        <Board.Header
          title={data.title}
          author={data.author}
          views={data.views}
          createdAt={data.createdAt}
          file={data.file}
        />
        <Board.Content content={data.content} />
        <Board.Footer
          postId={data.postId}
          prevPost={data.prevPost}
          nextPost={data.nextPost}
          to={PATH.NOTICE}
        />
      </Board>
    </section>
  )
}
