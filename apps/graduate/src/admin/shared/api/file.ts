import { AxiosResponse } from 'axios';

import { get, post } from '~/shared/api/axios';
import { END_POINT } from '~/shared/constants';

import {
  CertificateFileResponse,
  ThesisFileResponse,
} from '~/admin/shared/types/file';

export interface NoticeFileIdResponse {
  id: number;
  physicalPath: string;
}

export async function uploadNoticeFile(
  file: File,
): Promise<AxiosResponse<NoticeFileIdResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return post<NoticeFileIdResponse>({
    request: END_POINT.ADMIN.NOTICE_FILE_UPLOAD,
    data: formData,
  });
}

export async function getCertificateFile(
  certificateId: number,
): Promise<AxiosResponse<CertificateFileResponse>> {
  return get<CertificateFileResponse>({
    request: END_POINT.ADMIN.CERTIFICATE_FILE(certificateId),
  });
}

export async function getThesisFile(
  thesisId: number,
): Promise<AxiosResponse<ThesisFileResponse>> {
  return get<ThesisFileResponse>({
    request: END_POINT.ADMIN.THESIS_FILE(thesisId),
  });
}
