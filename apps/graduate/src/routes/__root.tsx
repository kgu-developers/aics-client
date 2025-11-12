import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { useAuthStore } from '~/shared/stores';

import { Header } from '~/widgets/Header';
import { Sidebar } from '~/widgets/sidebar';

import { LoginPage } from '~/pages/login';
import { vars } from '~/vars.css';

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => {
    const { isLoggedIn, isAdmin } = useAuthStore();

    if (!isLoggedIn) {
      return (
        <div style={{ display: 'flex' }}>
          <main
            style={{
              flex: '1 1 auto',
              overflow: 'auto',
              backgroundColor: vars.colors.sub,
            }}
          >
            <LoginPage />
          </main>
        </div>
      );
    }

    if (isAdmin) {
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

    if (!isAdmin) {
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
          </body>
          <TanStackRouterDevtools />
        </QueryClientProvider>
      );
    }
  },
});
