import { createFileRoute } from '@tanstack/react-router';
import ScheduleSection from '~/features/schedule/components/ScheduleSection';

export const Route = createFileRoute('/_adminLayout/schedule')({
	component: RouteComponent,
});

function RouteComponent() {
	return <ScheduleSection />;
}
