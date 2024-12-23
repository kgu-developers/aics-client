'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { BOARD_QUERY_OPTIONS } from '~/apis/board/queries';
import { PATH } from '~/constants/path';
import { Board } from './board';

function HydrateBoard({ postId }: { postId: string }) {
  const { data } = useSuspenseQuery(BOARD_QUERY_OPTIONS.DETAIL(postId));
  return (
    <Board>
      <Board.Header
        title={data.data.title}
        author={data.data.author}
        views={data.data.views}
        createdAt={data.data.createdAt}
        file={data.data.file}
      />
      <Board.Content content={data.data.content} />
      <Board.Footer
        prevPost={data.data.prevPost}
        nextPost={data.data.nextPost}
        to={PATH.NOTICE}
      />
    </Board>
  );
}

export { HydrateBoard };
