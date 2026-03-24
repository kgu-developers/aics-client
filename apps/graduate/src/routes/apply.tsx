import { createFileRoute, redirect } from '@tanstack/react-router';

import { checkPageAccess, notifyWarning } from '~/shared/utils';

import { ApplyPage } from '~/client/pages/apply';

type ApplySearch = {
  confirm: boolean;
};

export const Route = createFileRoute('/apply')({
  validateSearch: (search: Record<string, unknown>): ApplySearch => ({
    confirm: search.confirm === true || search.confirm === 'true',
  }),
  beforeLoad: async ({ context }) => {
    if (context.auth.isAdmin) {
      return;
    }

    const { canAccess, reason } = await checkPageAccess('apply');
    if (!canAccess) {
      if (reason) {
        notifyWarning(reason);
      }
      throw redirect({
        to: '/',
      });
    }
  },
  component: ApplyPage,
});
