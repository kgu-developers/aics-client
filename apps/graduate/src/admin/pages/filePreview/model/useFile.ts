import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { fetchCertificateFile, fetchThesisFile } from '../api';
import {
  transformCertificateResponse,
  transformThesisResponse,
} from '../utils';

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
        const response = await fetchCertificateFile(fileId);
        return transformCertificateResponse(response.data);
      } else {
        const response = await fetchThesisFile(fileId);
        return transformThesisResponse(response.data);
      }
    },
    enabled: enabled,
  });
}
