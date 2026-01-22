import { useQuery } from '@tanstack/react-query';

import { getCertificateFile, getThesisFile } from '~/shared/api/file';
import { KEYS } from '~/shared/constants';

import { transformCertificateResponse } from '../util/transformCertificateFileResponse';
import { transformThesisResponse } from '../util/transformThesisFileResponse';

type FileType = 'CERTIFICATE' | 'THESIS';

export function useFile(
  fileId: number,
  type: FileType | undefined,
  enabled: boolean,
) {
  return useQuery({
    queryKey: [...KEYS.STUDENT_FILE, type?.toLowerCase(), fileId],
    queryFn: async () => {
      if (type === 'CERTIFICATE') {
        const response = await getCertificateFile(fileId);
        return transformCertificateResponse(response.data);
      } else {
        const response = await getThesisFile(fileId);
        return transformThesisResponse(response.data);
      }
    },
    enabled: enabled,
  });
}
