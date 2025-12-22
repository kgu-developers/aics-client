import { fetchGraduationUsersExcel } from '~/shared/api';
import type { GraduationTypeFilter } from '~/shared/api/fetchGraduationUsers';

const DEFAULT_FILENAME = '졸업_대상자_목록.xlsx';

const resolveFilename = (contentDisposition?: string) => {
  if (!contentDisposition) return null;
  const match =
    /filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i.exec(
      contentDisposition,
    );
  const rawName = match?.[1] ?? match?.[2];
  return rawName ? decodeURIComponent(rawName) : null;
};

export default async function handleDownload(
  graduationType?: GraduationTypeFilter,
  filename = DEFAULT_FILENAME,
) {
  const response = await fetchGraduationUsersExcel(
    graduationType ? { graduationType } : undefined,
  );
  const contentDisposition = response.headers['content-disposition'];
  const resolvedFilename = resolveFilename(contentDisposition) ?? filename;

  const url = window.URL.createObjectURL(response.data);
  const link = document.createElement('a');
  link.href = url;
  link.download = resolvedFilename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
