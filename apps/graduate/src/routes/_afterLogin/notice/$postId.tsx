import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminCreatePage } from '~/pages/admin/notice';
import { NoticeDetailPage } from '~/pages/client/notice';

export const Route = createFileRoute('/_afterLogin/notice/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const { auth } = Route.useRouteContext();
  
  if (auth.isAdmin) {
    return <NoticeAdminCreatePage noticeId={Number(postId)} />;
  }
  
  return <NoticeDetailPage noticeId={Number(postId)} />;
}
