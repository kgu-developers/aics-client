import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/cert')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/cert"!</div>
}
