import { labs } from './data'

export function GET() {
  return Response.json({ data: labs })
}
