import { createFileRoute, redirect } from '@tanstack/react-router';
import { message } from 'antd';

import { checkPageAccess } from '~/shared/utils';

import { ThesisAdminPage } from '~/admin/pages/thesis';
import { ThesisPage } from '~/client/pages/thesis';

export const Route = createFileRoute('/thesis')({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAdmin) {
      return;
    }

    const { canAccess, reason } = await checkPageAccess('thesis');
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
      return <ThesisAdminPage />;
    }
    return <ThesisPage />;
  },
});
