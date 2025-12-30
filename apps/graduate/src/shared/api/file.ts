import { AxiosResponse } from 'axios';

import { get, post } from './axios';
import { END_POINT } from '../constants';
import { CertificateFileResponse, ThesisFileResponse } from '../types';

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
    request: '/api/v1/admin/files/post',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
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
