import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/schedule"!</div>
}
