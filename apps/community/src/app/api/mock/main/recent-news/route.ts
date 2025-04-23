import { news } from './data'

export function GET() {
  return Response.json({ data: news })
}
