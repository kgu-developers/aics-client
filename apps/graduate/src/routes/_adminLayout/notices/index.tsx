import { createFileRoute } from '@tanstack/react-router';
import { NoticesSection } from '~/features/notices/components';

export const Route = createFileRoute('/_adminLayout/notices/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <NoticesSection />;
}
