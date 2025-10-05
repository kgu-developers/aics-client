import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_clientLayout/client')({
  component: App,
})

function App() {
  return <div>Client</div>
}
