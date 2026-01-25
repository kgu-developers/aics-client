import { createFileRoute } from '@tanstack/react-router';

import { AllManagementPage } from '~/admin/pages/all';

type AllSearchParams = {
  graduationUserId?: number;
};

export const Route = createFileRoute('/_afterLogin/all')({
  component: AllManagementPage,
  validateSearch: (search: Record<string, unknown>): AllSearchParams => {
    return {
      graduationUserId: search.graduationUserId
        ? Number(search.graduationUserId)
        : undefined,
    };
  },
});
