import { createFileRoute } from '@tanstack/react-router';

import { ApplyPage } from '~/client/pages/apply';

export const Route = createFileRoute('/_afterLogin/apply')({
  component: ApplyPage,
});
