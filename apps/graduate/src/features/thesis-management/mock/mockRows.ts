import type { ThesisRow } from '~/features/thesis-management/types/rows';

const names = [
  '서진규',
  '이은신',
  '이어웅',
  '아이',
  '이도',
  '한태',
  '김현수',
  '최용환',
  '곽수',
  '최암',
];
const advisors = ['김현기', '권호성', '이은정', '권면기', '진도훈'];
const gradTerms = ['2026-02', '2026-08', '2025-08', '2030-08'];
const statusOptions = [
  '중간보고서',
  '최종보고서',
];
const approvedOptions: ThesisRow['approved'][] = [
  '승인',
  '미승인',
  '승인 대기',
];

const submissionStatusOptions: ThesisRow['submissionStatus'][] = [
  '제출',
  '미제출',
];

function makeStudentId(n: number): string {
  return String(20190000 + n - 1);
}

function buildMockRows(count = 90): ThesisRow[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      no: n,
      studentId: makeStudentId(n),
      name: names[i % names.length],
      advisor: advisors[i % advisors.length],
      gradTerm: gradTerms[i % gradTerms.length],
      status: statusOptions[i % statusOptions.length],
      submissionStatus: submissionStatusOptions[i % submissionStatusOptions.length],
      approved: approvedOptions[i % approvedOptions.length],
    };
  });
}

export const MOCK_ROWS: ThesisRow[] = buildMockRows(90);
