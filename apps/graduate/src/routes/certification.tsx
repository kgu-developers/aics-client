import { createFileRoute, redirect } from '@tanstack/react-router';

import { checkPageAccess, notifyWarning } from '~/shared/utils';

import { CertificationAdminPage } from '~/admin/pages/certification';
import { CertificationPage } from '~/client/pages/certification';

export const Route = createFileRoute('/certification')({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAdmin) {
      return;
    }

    const { canAccess, reason } = await checkPageAccess('certification');
    if (!canAccess) {
      if (reason) {
        notifyWarning(reason);
      }
      throw redirect({
        to: '/',
      });
    }
  },
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <CertificationAdminPage />;
    }
    return <CertificationPage />;
  },
});
