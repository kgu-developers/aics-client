import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { useAuthStore } from '~/shared/stores';

import { Sidebar } from '~/admin/widgets/sidebar';
import { Header as ClientHeader } from '~/client/widgets/Header';
import { vars } from '~/vars.css';

export interface AuthContext {
  auth: {
    isAuthenticated: boolean;
    isAdmin: boolean;
  };
}

export const Route = createRootRouteWithContext<AuthContext>()({
  component: () => {
    const { isAuthenticated, isAdmin } = useAuthStore();

    if (!isAuthenticated) {
      return <Outlet />;
    }

    if (isAuthenticated && isAdmin) {
      return (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main
            style={{
              flex: '1 1 auto',
              overflow: 'auto',
            }}
          >
            <Outlet />
          </main>
        </div>
      );
    }

    if (isAuthenticated && !isAdmin) {
      return (
        <>
          <div
            style={{
              position: 'relative',
              minHeight: '100dvh',
              minWidth: '100dvw',
            }}
          >
            <ClientHeader />
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
          <TanStackRouterDevtools />
        </>
      );
    }
  },
});
