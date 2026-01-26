export type CertRow = {
  id: number;
  no: number;
  studentId: string;
  name: string;
  status: '제출' | '미제출';
  approved: '승인' | '미승인';
};
