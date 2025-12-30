import { createFileRoute } from '@tanstack/react-router';

import { FilePreviewPage } from '~/pages/admin/filePreview';

type PreviewSearch = {
  fileId: number;
  type: 'THESIS' | 'CERTIFICATE';
};

export const Route = createFileRoute('/_afterLogin/file-preview')({
  validateSearch: (search: Record<string, unknown>): PreviewSearch => ({
    fileId: Number(search.fileId),
    type: search.type as 'THESIS' | 'CERTIFICATE',
  }),
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <FilePreviewPage />;
    }
  },
});
