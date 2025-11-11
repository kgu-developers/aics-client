import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '~/pages/client/home'

export const Route = createFileRoute('/_clientLayout/client')({
  component: App,
})

function App() {
  return <HomePage />
}
