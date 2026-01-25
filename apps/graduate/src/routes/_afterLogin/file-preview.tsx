import { createFileRoute } from '@tanstack/react-router';

import { FilePreviewPage } from '~/admin/pages/filePreview';

type PreviewSearch = {
  fileId: number;
  graduationUserId: number;
};

export const Route = createFileRoute('/_afterLogin/file-preview')({
  validateSearch: (search: Record<string, unknown>): PreviewSearch => ({
    fileId: Number(search.fileId),
    graduationUserId: Number(search.graduationUserId),
  }),
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <FilePreviewPage />;
    }
  },
});
