import { type FileItem } from '../model/file';

import { CertificateFileResponse } from '~/admin/shared/types/file';

export default function transformCertificateResponse(
  data: CertificateFileResponse,
): FileItem {
  return {
    ...data,
    graduationUserid: data.id,
    file: {
      fileId: data.certificateFile.id,
      physicalPath: data.certificateFile.physicalPath,
    },
  };
}
