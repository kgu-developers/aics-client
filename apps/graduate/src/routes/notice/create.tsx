import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminCreatePage } from '~/admin/pages/notice';

export const Route = createFileRoute('/notice/create')({
  component: NoticeAdminCreatePage,
});
