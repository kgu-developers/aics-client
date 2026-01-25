import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminCreatePage } from '~/admin/pages/notice';

export const Route = createFileRoute('/_afterLogin/notice/create')({
  component: NoticeAdminCreatePage,
});
