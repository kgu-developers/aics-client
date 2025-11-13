import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminCreatePage } from '~/pages/admin/notice';

export const Route = createFileRoute('/_afterLogin/notice/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  return <NoticeAdminCreatePage noticeId={Number(postId)} />;
}
