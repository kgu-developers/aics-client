import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/guidelines-and-rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/rules"!</div>
}
