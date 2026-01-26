import { AxiosResponse } from 'axios';

import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export async function removeNotice(
  noticeId: number,
): Promise<AxiosResponse<void>> {
  return patch<void>({
    request: END_POINT.ADMIN.NOTICE_DELETE(noticeId),
  });
}
