import { createFileRoute } from '@tanstack/react-router';

import { ThesisAdminPage } from '~/pages/admin/thesis';
import { ThesisPage } from '~/pages/client/thesis';

export const Route = createFileRoute('/_afterLogin/thesis')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <ThesisAdminPage />;
    }
    return <ThesisPage />;
  },
});
