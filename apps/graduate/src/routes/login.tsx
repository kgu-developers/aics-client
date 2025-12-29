import { createFileRoute, redirect } from '@tanstack/react-router';

import { ROUTE } from '~/shared/constants';

import { LoginPage } from '~/pages/login';

export const Route = createFileRoute('/login')({
  component: LoginPage,
  beforeLoad: ({ context, location }) => {
    if (context.auth.isAuthenticated && location.pathname === '/login') {
      throw redirect({
        to: ROUTE.HOME,
      });
    }
  },
});
