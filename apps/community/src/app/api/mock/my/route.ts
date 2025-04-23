import { myProfile } from './data'

export function GET() {
  return Response.json({ data: myProfile })
}
