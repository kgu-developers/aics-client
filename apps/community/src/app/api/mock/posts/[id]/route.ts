import { boardDetail } from '../data'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const postId = (await params).id
  const data = boardDetail.find((item) => item.postId === Number(postId))

  return Response.json({ data: data })
}
