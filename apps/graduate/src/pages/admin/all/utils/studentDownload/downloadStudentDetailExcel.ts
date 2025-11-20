import * as XLSX from 'xlsx';

import type {
  StageData,
  UserDetail,
} from '~/pages/admin/all/types/allManagement';

export default function downloadStudentDetailExcel(
  studentDetails: Array<{
    userDetail: UserDetail & { type: string };
    stageData: StageData[];
  }>,
  filename = '학생 상세 정보.xlsx',
) {
  const excelData = studentDetails.map(({ userDetail, stageData }) => {
    const application = stageData.find(s => s.stage === '신청서');
    const middleReport = stageData.find(s => s.stage === '중간보고서');
    const finalReport = stageData.find(s => s.stage === '최종보고서');

    const capstoneStatus = userDetail.etc || '-';

    return {
      학번: userDetail.studentId,
      이름: userDetail.name,
      지도교수: userDetail.professor,
      졸업년도: userDetail.period,
      소속학과: userDetail.department,
      지연횟수: userDetail.delay,
      캡스톤이수: capstoneStatus,
      '신청서 상태': application
        ? application.isSubmit
          ? userDetail.type
          : '미제출'
        : '없음',
      '중간보고서 상태': middleReport
        ? middleReport.isSubmit
          ? '제출'
          : '미제출'
        : '없음',
      '최종보고서 상태': finalReport
        ? finalReport.isSubmit
          ? '제출'
          : '미제출'
        : '없음',
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '학생 상세 정보');

  const widthMap = {
    학번: 15,
    이름: 12,
    지도교수: 12,
    졸업년도: 12,
    소속학과: 15,
    지연횟수: 10,
    캡스톤이수: 15,
    '신청서 상태': 15,
    '중간보고서 상태': 15,
    '최종보고서 상태': 15,
  };

  const columnWidths = Object.values(widthMap).map(width => ({ wch: width }));
  worksheet['!cols'] = columnWidths;

  XLSX.writeFile(workbook, filename);
}
