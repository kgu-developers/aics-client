import downloadStudentDetailExcel from './downloadStudentDetailExcel';

import {
  stageData,
  userDetailData,
} from '~/pages/admin/all/mock/allManagement';
import type { AllManagementRow } from '~/pages/admin/all/types/allManagement';

export default function handleDownload(
  selectedIds: (string | number)[],
  filteredRows: AllManagementRow[],
  filename = '학생 상세 정보.xlsx',
) {
  if (selectedIds.length === 0) {
    alert('1명 이상 선택하세요.');
    return;
  }

  const selectedRows = filteredRows.filter(row => selectedIds.includes(row.id));

  if (selectedRows.length === 0) {
    alert('선택된 항목을 찾을 수 없습니다.');
    return;
  }

  const studentDetails = selectedRows.map(row => ({
    userDetail: {
      ...userDetailData,
      studentId: row.studentId,
      name: row.name,
      type: row.type,
    },
    stageData: stageData,
  }));

  downloadStudentDetailExcel(studentDetails, filename);
}
