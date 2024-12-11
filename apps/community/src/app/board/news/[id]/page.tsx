import { Board } from '~/components/board/board';

import { PATH } from '~/constants/path';

import { getBoardDetail } from '~/app/board/remote';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  const { data } = await getBoardDetail(postId);
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
      <div>{data.prevPost.id}</div>
    </Board>
  );
}
