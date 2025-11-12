import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_afterLogin')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated && location.pathname !== '/login') {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: () => <Outlet />,
});
