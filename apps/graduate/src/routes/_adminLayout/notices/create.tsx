import { createFileRoute } from '@tanstack/react-router';
import NoticeForm from '~/features/notices/components/NoticeForm';

export const Route = createFileRoute('/_adminLayout/notices/create')({
	component: RouteComponent,
});

function RouteComponent() {
	return <NoticeForm />;
}
