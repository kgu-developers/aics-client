import { Board } from '~/components/board/board';

import { getBoardDetail } from './remote';

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
    </Board>
  );
}
