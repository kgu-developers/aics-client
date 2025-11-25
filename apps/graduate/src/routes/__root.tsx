import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { useAuthStore } from '~/shared/stores';

import { Header } from '~/widgets/Header';
import { Sidebar } from '~/widgets/sidebar';

import { vars } from '~/vars.css';

export interface AuthContext {
  auth: {
    isAuthenticated: boolean;
    isAdmin: boolean;
    setIsAuthenticated: (value: boolean) => void;
    setIsAdmin: (value: boolean) => void;
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
              backgroundColor: vars.colors.sub,
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
              backgroundColor: vars.colors.sub,
            }}
          >
            <Header />
            <main
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'auto',
                display: 'flex',
                backgroundColor: vars.colors.sub,
                flexDirection: 'column',
                gap: vars.spacing.md,
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
