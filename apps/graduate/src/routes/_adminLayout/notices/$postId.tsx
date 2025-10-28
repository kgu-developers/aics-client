import { createFileRoute } from '@tanstack/react-router';
import NoticeDetail from '~/features/notices/components/NoticeForm';

export const Route = createFileRoute('/_adminLayout/notices/$postId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { postId } = Route.useParams();
	return <NoticeDetail noticeId={Number(postId)} />;
}
