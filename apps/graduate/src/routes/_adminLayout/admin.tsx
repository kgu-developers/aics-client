import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin')({
  component: App,
})

function App() {
  return <div>Admin</div>
}
