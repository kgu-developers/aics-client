import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_adminLayout/notices')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/notices"!</div>;
}
