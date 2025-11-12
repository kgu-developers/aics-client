import { createFileRoute } from '@tanstack/react-router';

import { ThesisManagement } from '~/features/thesis-management/components';

import { ThesisPage } from '~/pages/client/thesis';

export const Route = createFileRoute('/_afterLogin/thesis')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <ThesisManagement />;
    }
    return <ThesisPage />;
  },
});
