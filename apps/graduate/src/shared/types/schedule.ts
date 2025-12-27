export type SubmissionType =
  | 'SUBMITTED'
  | 'MIDTHESIS'
  | 'FINALTHESIS'
  | 'CERTIFICATE'
  | 'APPROVED'
  | 'OTHER';

export type SubmissionTypeLabel =
  | '신청접수'
  | '중간보고서'
  | '최종보고서'
  | '자격증'
  | '최종 통과'
  | '기타자격';

export type ScheduleStatus = 'IN_PROGRESS' | 'PENDING' | 'CLOSED';

export type CreateScheduleRequest = {
  submissionType: SubmissionType;
  content: string;
  startDate: string;
  endDate: string;
};

export type UpdateScheduleRequest = {
  startDate: string;
  endDate: string;
};
