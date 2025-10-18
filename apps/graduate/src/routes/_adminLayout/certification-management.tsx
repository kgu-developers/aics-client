import { createFileRoute } from '@tanstack/react-router';
import CertificationManagement from '~/features/certification-management/components/CertificationManagement'
export const Route = createFileRoute('/_adminLayout/certification-management')({
	component: () => <CertificationManagement />,
});
