import { createFileRoute, redirect } from '@tanstack/react-router';

import { checkPageAccess, notifyWarning } from '~/shared/utils';

import { ThesisAdminPage } from '~/admin/pages/thesis';
import { ThesisPage } from '~/client/pages/thesis';

type ThesisSearch = {
  type: 'midreport' | 'finalreport';
};

export const Route = createFileRoute('/thesis')({
  validateSearch: (search: Record<string, unknown>): ThesisSearch => ({
    type: search.type === 'finalreport' ? 'finalreport' : 'midreport',
  }),
  beforeLoad: async ({ context }) => {
    if (context.auth.isAdmin) {
      return;
    }

    const { canAccess, reason } = await checkPageAccess('thesis');
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
      return <ThesisAdminPage />;
    }
    return <ThesisPage />;
  },
});
