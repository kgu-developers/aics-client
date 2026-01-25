import { createFileRoute, redirect } from '@tanstack/react-router';
import { lazy } from 'react';

const HomePage = lazy(() => import('~/client/pages/home'));

export const Route = createFileRoute('/_afterLogin/')({
  beforeLoad: ({ context }) => {
    if (context.auth.isAdmin) {
      throw redirect({ to: '/all' });
    }
  },
  component: HomePage,
});
