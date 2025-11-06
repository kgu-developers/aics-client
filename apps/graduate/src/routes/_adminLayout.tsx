import { Outlet, createFileRoute } from '@tanstack/react-router'

import { Sidebar } from '~/widgets/sidebar'

import { vars } from '~/vars.css'

export const Route = createFileRoute('/_adminLayout')({
  component: () => (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main
        style={{
          flex: '1 1 auto',
          overflow: 'auto',
          backgroundColor: vars.colors.sub,
        }}
      >
        <Outlet />
      </main>
    </div>
  ),
})
