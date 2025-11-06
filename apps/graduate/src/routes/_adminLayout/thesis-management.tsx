import { createFileRoute } from '@tanstack/react-router'

import { ThesisManagement } from '~/features/thesis-management/components'
export const Route = createFileRoute('/_adminLayout/thesis-management')({
  component: () => <ThesisManagement />,
})
