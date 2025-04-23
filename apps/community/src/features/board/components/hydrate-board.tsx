'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { BOARD_QUERY_OPTIONS } from '~/features/board/services/queries'
import { PATH } from '~/shared/constants/path'

import { Board } from '~/features/board/components/board'

function HydrateBoard({ postId }: { postId: string }) {
  const { data } = useSuspenseQuery(BOARD_QUERY_OPTIONS.DETAIL(postId))
  return (
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
        prevPost={data.prevPost}
        nextPost={data.nextPost}
        to={PATH.NOTICE}
      />
    </Board>
  )
}

export { HydrateBoard }
