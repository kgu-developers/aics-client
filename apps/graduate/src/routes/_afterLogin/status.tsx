import { createFileRoute } from '@tanstack/react-router';

import { StatusPage } from '~/client/pages/status';

export const Route = createFileRoute('/_afterLogin/status')({
  component: StatusPage,
});
