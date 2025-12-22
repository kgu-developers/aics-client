import { fetchGraduationUsersExcel } from '~/shared/api';
import type { GraduationTypeFilter } from '~/shared/api/fetchGraduationUsers';

const DEFAULT_FILENAME = '졸업_대상자_목록.xlsx';

export default async function downloadGraduationUsersExcel(
  graduationType?: GraduationTypeFilter,
  fallbackFilename = DEFAULT_FILENAME,
) {
  const { blob, filename } = await fetchGraduationUsersExcel(
    graduationType ? { graduationType } : undefined,
  );
  const resolvedFilename = filename ?? fallbackFilename;

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = resolvedFilename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
