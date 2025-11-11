import { createFileRoute } from '@tanstack/react-router'

import { useAuthStore } from '~/shared/stores'

import { ScheduleSection } from '~/features/schedule/components'

import { SchedulePage } from '~/pages/client/schedule'

export const Route = createFileRoute('/_adminLayout/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isAdmin } = useAuthStore()
  if (!isAdmin) {
    return <SchedulePage />
  }

  return <ScheduleSection />
}
