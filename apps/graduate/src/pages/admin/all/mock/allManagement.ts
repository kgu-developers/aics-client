import type {
  AllManagementRow,
  StageData,
  UserDetail,
} from '../types/allManagement';

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
    type: i % 2 === 0 ? '자격증' : '졸업 논문',
    status: [
      '제출',
      '미제출',
      '최종보고서-미제출',
      '제출',
      '제출',
      '미제출',
      '미제출',
      '중간보고서-미제출',
    ][i % 8],
  }),
);

export const userDetailData: UserDetail = {
  studentId: '202211461',
  period: '2028-02',
  name: '서진규',
  professor: '김교수',
  department: '컴퓨터공학과',
  delay: 0,
  etc: '캡스톤 미이수',
};

export const stageData: StageData[] = [
  {
    key: '1',
    stage: '신청서',
    period: '2025-03-17~04-05',
    date: '2025-03-27',
    isSubmit: true,
  },
  {
    key: '2',
    stage: '중간보고서',
    period: '2025-04-14~05-30',
    date: '-',
    isSubmit: false,
  },
  {
    key: '3',
    stage: '최종보고서',
    period: '2025-04-14~05-30',
    date: '-',
    isSubmit: false,
  },
];
