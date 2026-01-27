import { createFileRoute, redirect } from '@tanstack/react-router';
import { message } from 'antd';

import { checkPageAccess } from '~/shared/utils';

import { ApplyPage } from '~/client/pages/apply';

export const Route = createFileRoute('/apply')({
  beforeLoad: async ({ context }) => {
    if (context.auth.isAdmin) {
      return;
    }

    const { canAccess, reason } = await checkPageAccess('apply');
    if (!canAccess) {
      if (reason) {
        message.warning(reason);
      }
      throw redirect({
        to: '/',
      });
    }
  },
  component: ApplyPage,
});
