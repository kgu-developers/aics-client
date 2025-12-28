import { AxiosResponse } from 'axios';

import { post } from './axios';

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
