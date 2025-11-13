import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminCreatePage } from '~/pages/admin/notice';

export const Route = createFileRoute('/_afterLogin/notice/create')({
  component: NoticeAdminCreatePage,
});
