import { dept } from './data'

export function GET() {
  return Response.json({ data: dept })
}
