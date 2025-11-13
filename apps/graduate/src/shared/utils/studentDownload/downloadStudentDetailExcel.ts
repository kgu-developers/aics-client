import * as XLSX from 'xlsx';

import type {
  StageData,
  UserDetail,
} from '~/pages/admin/all/types/allManagement';

/**
 * 학생 상세 정보를 엑셀 파일로 다운로드합니다.
 * @param studentDetails - 학생 상세 정보 배열
 * @param filename - 다운로드할 파일명
 */
export default function downloadStudentDetailExcel(
  studentDetails: Array<{
    userDetail: UserDetail;
    stageData: StageData[];
  }>,
  filename = '학생 상세 정보.xlsx',
) {
  if (studentDetails.length === 0) {
    alert('다운로드할 항목을 선택해주세요.');
    return;
  }

  const excelData = studentDetails.map(({ userDetail, stageData }) => {
    const application = stageData.find(s => s.stage === '신청서');
    const middleReport = stageData.find(s => s.stage === '중간보고서');
    const finalReport = stageData.find(s => s.stage === '최종보고서');

    const capstoneStatus = userDetail.etc || '-';

    return {
      학번: userDetail.studentId,
      졸업시기: userDetail.period,
      이름: userDetail.name,
      지도교수: userDetail.professor,
      소속학과: userDetail.department,
      지연횟수: userDetail.delay,
      '캡스톤 이수': capstoneStatus,
      '신청서 일정': application?.period || '-',
      '신청서 상태': application
        ? `${application.date} (${application.isSubmit ? '제출' : '미제출'})`
        : '-',
      '중간보고서 일정': middleReport?.period || '-',
      '중간보고서 상태': middleReport
        ? `${middleReport.date} (${middleReport.isSubmit ? '제출' : '미제출'})`
        : '-',
      '최종보고서 일정': finalReport?.period || '-',
      '최종보고서 상태': finalReport
        ? `${finalReport.date} (${finalReport.isSubmit ? '제출' : '미제출'})`
        : '-',
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '학생 상세 정보');

  const columnWidths = [
    { wch: 15 }, // 학번
    { wch: 12 }, // 졸업시기
    { wch: 12 }, // 이름
    { wch: 12 }, // 지도교수
    { wch: 15 }, // 소속학과
    { wch: 10 }, // 지연횟수
    { wch: 15 }, // 캡스톤 이수
    { wch: 20 }, // 신청서 일정
    { wch: 25 }, // 신청서 상태
    { wch: 20 }, // 중간보고서 일정
    { wch: 25 }, // 중간보고서 상태
    { wch: 20 }, // 최종보고서 일정
    { wch: 25 }, // 최종보고서 상태
  ];
  worksheet['!cols'] = columnWidths;

  XLSX.writeFile(workbook, filename);
}

