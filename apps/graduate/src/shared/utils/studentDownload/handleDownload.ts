import downloadStudentDetailFromRows from './downloadStudentDetailFromRows';

/**
 * 통합 다운로드 함수 - Toolbar에서 사용하는 메인 함수입니다.
 * selectedIds와 filteredRows를 받아서 전체 다운로드 프로세스를 처리합니다.
 * @param selectedIds - 선택된 학생 ID 배열
 * @param filteredRows - 필터링된 전체 row 배열
 * @param filename - 다운로드할 파일명
 */
export default function handleDownload(
  selectedIds: (string | number)[],
  filteredRows: Array<{ id: string | number; studentId: string; name: string }>,
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

  downloadStudentDetailFromRows(selectedRows, filename);
}

