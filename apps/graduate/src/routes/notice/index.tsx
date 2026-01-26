import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminPage } from '~/admin/pages/notice';
import { NoticePage } from '~/client/pages/notice';

export const Route = createFileRoute('/notice/')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <NoticeAdminPage />;
    }
    return <NoticePage />;
  },
});
