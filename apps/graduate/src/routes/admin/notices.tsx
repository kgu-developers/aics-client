import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/notices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/notices"!</div>
}
