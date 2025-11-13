import {
  stageData,
  userDetailData,
} from '~/features/all-management/mock/allManagement';

import { downloadStudentDetailExcel } from './downloadStudentDetailExcel';

/**
 * 선택된 row 데이터를 받아서 학생 상세 정보로 변환합니다.
 * @param selectedRows - 선택된 row 배열 (studentId, name 필드 필요)
 * @param filename - 다운로드할 파일명
 */
export function downloadStudentDetailFromRows(
  selectedRows: Array<{ id: string | number; studentId: string; name: string }>,
  filename = '학생 상세 정보.xlsx',
) {
  if (selectedRows.length === 0) {
    alert('1명 이상 선택하세요.');
    return;
  }

  const studentDetails = selectedRows.map(row => ({
    userDetail: {
      ...userDetailData,
      studentId: row.studentId,
      name: row.name,
    },
    stageData: stageData,
  }));

  downloadStudentDetailExcel(studentDetails, filename);
}
