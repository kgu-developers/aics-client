import { heroes } from './data'

export function GET() {
  return Response.json({ data: heroes })
}
