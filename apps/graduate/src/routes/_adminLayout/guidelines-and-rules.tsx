import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/guidelines-and-rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rules"!</div>
}
