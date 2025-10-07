import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/graduates')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/graduates"!</div>
}
