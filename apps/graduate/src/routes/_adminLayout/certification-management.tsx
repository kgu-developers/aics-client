import { createFileRoute } from '@tanstack/react-router';

import { CertificationManagement } from '~/features/certification-management/components';
export const Route = createFileRoute('/_adminLayout/certification-management')({
  component: () => <CertificationManagement />,
});
