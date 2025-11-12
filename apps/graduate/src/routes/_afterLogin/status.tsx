import { createFileRoute } from '@tanstack/react-router';

import { StatusPage } from '~/pages/client/status';

export const Route = createFileRoute('/_afterLogin/status')({
  component: StatusPage,
});
