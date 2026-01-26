import { createFileRoute, redirect } from '@tanstack/react-router';
import { message } from 'antd';

import { checkPageAccess } from '~/shared/utils';

import { CertificationAdminPage } from '~/admin/pages/certification';
import { CertificationPage } from '~/client/pages/certification';

export const Route = createFileRoute('/certification')({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAdmin) {
      throw redirect({
        to: '/all',
      });
    }

    const { canAccess, reason } = await checkPageAccess('certification');
    if (!canAccess) {
      if (reason) {
        message.warning(reason);
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
