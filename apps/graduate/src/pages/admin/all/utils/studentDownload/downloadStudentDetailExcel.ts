import * as XLSX from 'xlsx';

import {
  TABLE_HEADER,
  type SubmissionStage,
} from '~/pages/admin/all/constants/excel';
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
    const getSubmissionStatus = (
      stageName: SubmissionStage,
      isApplication = false,
    ) => {
      const stage = stageData.find(s => s.stage === stageName);
      if (!stage) return '없음';
      if (stage.isSubmit) return isApplication ? userDetail.type : '제출';
      return '미제출';
    };

    const capstoneStatus = userDetail.etc || '-';

    return {
      [TABLE_HEADER.ID]: userDetail.studentId,
      [TABLE_HEADER.NAME]: userDetail.name,
      [TABLE_HEADER.PROFESSOR]: userDetail.professor,
      [TABLE_HEADER.PERIOD]: userDetail.period,
      [TABLE_HEADER.DEPARTMENT]: userDetail.department,
      [TABLE_HEADER.DELAY]: userDetail.delay,
      [TABLE_HEADER.CAPSTONE]: capstoneStatus,
      [TABLE_HEADER.APP_STATUS]: getSubmissionStatus('신청서', true),
      [TABLE_HEADER.MID_STATUS]: getSubmissionStatus('중간보고서'),
      [TABLE_HEADER.FINAL_STATUS]: getSubmissionStatus('최종보고서'),
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '학생 상세 정보');

  const widthMap = {
    [TABLE_HEADER.ID]: 15,
    [TABLE_HEADER.NAME]: 12,
    [TABLE_HEADER.PROFESSOR]: 12,
    [TABLE_HEADER.PERIOD]: 12,
    [TABLE_HEADER.DEPARTMENT]: 15,
    [TABLE_HEADER.DELAY]: 10,
    [TABLE_HEADER.CAPSTONE]: 15,
    [TABLE_HEADER.APP_STATUS]: 15,
    [TABLE_HEADER.MID_STATUS]: 15,
    [TABLE_HEADER.FINAL_STATUS]: 15,
  };

  const columnWidths = Object.values(widthMap).map(width => ({ wch: width }));
  worksheet['!cols'] = columnWidths;

  XLSX.writeFile(workbook, filename);
}
