import { createFileRoute } from '@tanstack/react-router';

import { ApplyPage } from '~/pages/client/apply';

export const Route = createFileRoute('/_afterLogin/apply')({
  component: ApplyPage,
});
