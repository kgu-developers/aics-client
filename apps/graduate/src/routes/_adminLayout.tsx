import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout')({
  beforeLoad: () => {},
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
})
