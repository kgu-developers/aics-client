import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_adminLayout/thesis-application-management',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/thesis"!</div>
}
