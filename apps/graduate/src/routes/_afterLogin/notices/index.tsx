import { createFileRoute } from '@tanstack/react-router';

import { NoticesSection } from '~/features/notices/components';

import { NoticePage } from '~/pages/client/notice';

export const Route = createFileRoute('/_afterLogin/notices/')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <NoticesSection />;
    }
    return <NoticePage />;
  },
});
