import type { CertRow } from '~/features/certification-management/types/row';

export const MOCK_ROWS: CertRow[] = Array.from({ length: 88 }).map((_, i) => ({
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
  status: i % 3 === 0 ? '제출' : '미제출',
  approved: i % 5 === 0 ? '승인' : '미승인',
}));
