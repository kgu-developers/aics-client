import { createFileRoute } from '@tanstack/react-router';

import { ScheduleAdminPage } from '~/admin/pages/schedule';

export const Route = createFileRoute('/_afterLogin/schedule')({
  component: ScheduleAdminPage,
});
