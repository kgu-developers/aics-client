import { AxiosResponse } from 'axios';

import { post } from '~/shared/api/axios';
import { END_POINT } from '~/shared/constants';

export interface NoticeFileIdResponse {
  id: number;
  physicalPath: string;
}

export async function submitNoticeFile(
  file: File,
): Promise<AxiosResponse<NoticeFileIdResponse>> {
  const formData = new FormData();
  formData.append('file', file);

  return post<NoticeFileIdResponse>({
    request: END_POINT.ADMIN.NOTICE_FILE_UPLOAD,
    data: formData,
  });
}
