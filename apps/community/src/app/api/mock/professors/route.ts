import { professors } from './data'

export function GET() {
  return Response.json({ data: professors })
}
