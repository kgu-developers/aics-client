import { createFileRoute } from '@tanstack/react-router';

import { ThesisAdminPage } from '~/admin/pages/thesis';
import { ThesisPage } from '~/client/pages/thesis';

export const Route = createFileRoute('/_afterLogin/thesis')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <ThesisAdminPage />;
    }
    return <ThesisPage />;
  },
});
