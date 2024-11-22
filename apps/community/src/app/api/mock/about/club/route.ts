import { clubs } from './data';

export function GET() {
  return Response.json({ data: clubs });
}
