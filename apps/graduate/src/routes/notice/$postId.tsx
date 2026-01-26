import { createFileRoute } from '@tanstack/react-router';

import { NoticeAdminCreatePage } from '~/admin/pages/notice';
import { NoticeDetailPage } from '~/client/pages/notice';

export const Route = createFileRoute('/notice/$postId')({
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
