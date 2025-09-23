import { createFileRoute, useMatch } from '@tanstack/react-router'

import { Board } from '~/shared/components/Post'

import { PATH } from '~/constants/path'
import { usePostDetail } from '~/shared/hooks/Post'

export const Route = createFileRoute('/news/$postId')({
  component: PostDetailPage,
})

function PostDetailPage() {
  const { params } = useMatch({ from: '/news/$postId' })
  const { data } = usePostDetail({ postId: Number(params.postId) })
  const {
    title,
    author,
    views,
    createdAt,
    file,
    content,
    postId,
    prevPost,
    nextPost,
  } = data

  return (
    <section className="px-16">
      <Board>
        <Board.Header
          title={title}
          author={author}
          views={views}
          createdAt={createdAt}
          file={file}
        />
        <Board.Content content={content} />
        <Board.Footer
          postId={postId}
          prevPost={prevPost}
          nextPost={nextPost}
          to={PATH.NEWS}
        />
      </Board>
    </section>
  )
}
