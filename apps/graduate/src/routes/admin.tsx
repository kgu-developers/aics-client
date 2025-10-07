import {vars} from '~/vars.css'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Sidebar } from '~/widgets/sidebar'
export const Route = createFileRoute('/admin')({
  component: () => (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: '1 1 auto', overflow: 'auto' ,backgroundColor: vars.colors.sub }}>
        <Outlet />
      </main>
    </div>
  ),
})
