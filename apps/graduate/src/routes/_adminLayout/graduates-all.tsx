import { createFileRoute } from '@tanstack/react-router'

import { ProtectedRoute } from '~/shared/components'

import { AllManagement } from '~/features/all-management/components'

export const Route = createFileRoute('/_adminLayout/graduates-all')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProtectedRoute>
      <AllManagement />
    </ProtectedRoute>
  )
}
