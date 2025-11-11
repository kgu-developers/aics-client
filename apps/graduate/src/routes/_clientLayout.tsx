import { Outlet, createFileRoute } from '@tanstack/react-router'

import { Header } from '~/widgets/Header'

import { vars } from '~/vars.css'

export const Route = createFileRoute('/_clientLayout')({
  beforeLoad: () => {},
  component: () => (
    <body
      style={{
        position: 'relative',
        minHeight: '100dvh',
        maxWidth: '1023px',
        margin: '0 auto',
        backgroundColor: vars.colors.sub,
      }}
    >
      <Header />
      <main
        style={{
          position: 'absolute',
          top: vars.spacing.header,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'auto',
          padding: vars.spacing.md,
          paddingTop: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: vars.spacing.xl,
        }}
      >
        <Outlet />
      </main>
    </body>
  ),
})
