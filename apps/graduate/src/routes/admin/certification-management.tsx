import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/certification-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/cert"!</div>
}
