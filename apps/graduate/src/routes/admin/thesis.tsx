import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/thesis')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/thesis"!</div>
}
