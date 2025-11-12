import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Header } from '~/widgets/Header';
import { Sidebar } from '~/widgets/sidebar';

import { vars } from '~/vars.css';

const queryClient = new QueryClient();

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
    const { auth } = Route.useRouteContext();

    if (!auth.isAuthenticated) {
      return <Outlet />;
    }

    if (auth.isAuthenticated && auth.isAdmin) {
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

    if (auth.isAuthenticated && !auth.isAdmin) {
      return (
        <QueryClientProvider client={queryClient}>
          <body
            style={{
              position: 'relative',
              minHeight: '100dvh',
              minWidth: '100dvw',
              backgroundColor: vars.colors.sub,
            }}
          >
            <Header auth={auth} />
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
          </body>
          <TanStackRouterDevtools />
        </QueryClientProvider>
      );
    }
  },
});
