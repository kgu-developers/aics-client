import { user } from './data';

export function GET() {
  return Response.json({ data: user });
}
