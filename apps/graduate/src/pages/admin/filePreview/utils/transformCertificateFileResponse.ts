import { CertificateFileResponse } from '~/shared/types';

import { FileItem } from '../model/filePreview';

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
