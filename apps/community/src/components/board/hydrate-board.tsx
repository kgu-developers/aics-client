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
        title={data.contents.title}
        author={data.contents.author}
        views={data.contents.views}
        createdAt={data.contents.createdAt}
        file={data.contents.file}
      />
      <Board.Content content={data.contents.content} />
      <Board.Footer
        prevPost={data.contents.prevPost}
        nextPost={data.contents.nextPost}
        to={PATH.NOTICE}
      />
    </Board>
  );
}

export { HydrateBoard };
