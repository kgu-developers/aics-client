import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_adminLayout/graduates-all')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/graduates"!</div>;
}
