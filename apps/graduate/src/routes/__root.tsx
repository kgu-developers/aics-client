import {
  Outlet,
  createRootRouteWithContext,
  redirect,
} from '@tanstack/react-router';

import AdminLayout from '~/shared/layouts/AdminLayout';
import ClientLayout from '~/shared/layouts/ClientLayout';

export interface AuthContext {
  auth: {
    isAuthenticated: boolean;
    isAdmin: boolean;
  };
}

export const Route = createRootRouteWithContext<AuthContext>()({
  beforeLoad: ({ context, location }) => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      return;
    }

    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    }
  },

  component: () => {
    const { isAuthenticated, isAdmin } = Route.useRouteContext().auth;

    if (!isAuthenticated) {
      return <Outlet />;
    }

    if (isAdmin) {
      return <AdminLayout />;
    }

    if (!isAdmin) {
      return <ClientLayout />;
    }
  },
});
