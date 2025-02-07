import { notices } from './data';

export function GET() {
  return Response.json({ data: notices });
}
