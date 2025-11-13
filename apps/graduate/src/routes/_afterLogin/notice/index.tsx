import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminPage } from '~/pages/admin/notice';
import { NoticePage } from '~/pages/client/notice';

export const Route = createFileRoute('/_afterLogin/notice/')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <NoticeAdminPage />;
    }
    return <NoticePage />;
  },
});
