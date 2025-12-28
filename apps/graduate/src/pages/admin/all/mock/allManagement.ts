import type { AllManagementRow } from '../types/allManagement';

export type MockUserDetail = {
  studentId: string;
  period: string;
  name: string;
  professor: string;
  department: string;
  delay: number;
  etc: string;
};

const getStatusText = (i: number): string => {
  if (i % 2 === 0) {
    if (i % 3 !== 0) return '자격증(미제출)';
    if (i % 4 !== 0) return '자격증(미승인)';
    return '최종 승인';
  } else {
    if (i % 3 !== 0) return '중간보고서(미제출)';
    if (i % 5 !== 0) return '중간보고서(미승인)';
    if (i % 4 !== 0) return '최종보고서(미제출)';
    if (i % 6 !== 0) return '최종보고서(미승인)';
    return '최종 승인';
  }
};

export const MOCK_ROWS: AllManagementRow[] = Array.from({ length: 88 }).map(
  (_, i) => ({
    id: i + 1,
    no: i + 1,
    studentId: `${20190000 + (i % 30)}`,
    name: [
      '서진규',
      '이은신',
      '이여웅',
      '아이',
      '이도',
      '한태',
      '김현수',
      '최용환',
      '곽수',
      '최압',
    ][i % 10],
    graduationDate: '2028-08',
    graduationTypeLabel: i % 2 === 0 ? '자격증' : '논문',
    statusText: getStatusText(i),
  }),
);

export const userDetailData: MockUserDetail = {
  studentId: '202211461',
  period: '2028-02',
  name: '서지국',
  professor: '김교수',
  department: '컴퓨터공학과',
  delay: 0,
  etc: '캡스톤 미이수',
};
