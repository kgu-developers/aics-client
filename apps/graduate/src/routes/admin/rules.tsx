import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/rules"!</div>
}
