import { get } from '~/shared/api';
import { END_POINT, GraduationType } from '~/shared/constants';

export type FetchGraduationUsersExcelParams = {
  graduationType?: GraduationType;
};

export type FetchGraduationUsersExcelResult = {
  blob: Blob;
  filename: string | null;
};

const resolveFilename = (contentDisposition?: string) => {
  if (!contentDisposition) return null;
  const match = /filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i.exec(
    contentDisposition,
  );
  const rawName = match?.[1] ?? match?.[2];
  return rawName ? decodeURIComponent(rawName) : null;
};

export const fetchGraduationUsersExcel = async (
  params?: FetchGraduationUsersExcelParams,
): Promise<FetchGraduationUsersExcelResult> => {
  const response = await get<Blob, FetchGraduationUsersExcelParams>({
    request: END_POINT.ADMIN.GRADUATION_USERS_EXCEL,
    params,
    headers: {
      Accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    responseType: 'blob',
  });

  const contentDisposition = response.headers['content-disposition'];

  return {
    blob: response.data,
    filename: resolveFilename(contentDisposition),
  };
};
