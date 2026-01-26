import { Outlet } from '@tanstack/react-router';

import { Header } from '~/client/widgets/Header';
import { vars } from '~/vars.css';

export default function ClientLayout() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          minHeight: '100dvh',
          minWidth: '100dvw',
        }}
      >
        <Header />
        <main
          style={{
            position: 'absolute',
            inset: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: vars.spacing.header,
            boxSizing: 'border-box',
          }}
        >
          <Outlet />
        </main>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
