import { createFileRoute } from '@tanstack/react-router'

import { ProtectedRoute } from '~/shared/components'

export const Route = createFileRoute('/_adminLayout/guidelines-and-rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProtectedRoute>
      <div>Hello "/rules"!</div>
    </ProtectedRoute>
  )
}
