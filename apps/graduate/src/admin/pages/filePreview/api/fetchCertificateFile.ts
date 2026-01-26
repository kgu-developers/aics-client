import { AxiosResponse } from 'axios';

import { get } from '~/shared/api/axios';
import { END_POINT } from '~/shared/constants';

export interface CertificateFileResponse {
  id: number;
  scheduleId: number;
  approval: boolean;
  certificateFile: {
    id: number;
    physicalPath: string;
  };
}

export async function fetchCertificateFile(
  certificateId: number,
): Promise<AxiosResponse<CertificateFileResponse>> {
  return get<CertificateFileResponse>({
    request: END_POINT.ADMIN.CERTIFICATE_FILE(certificateId),
  });
}
