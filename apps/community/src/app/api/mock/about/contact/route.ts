import { contacts } from './data'

export function GET() {
  return Response.json({ data: contacts })
}
