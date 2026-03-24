import type { SubmissionType, SubmissionTypeLabel } from '~/shared/types';

export const SCHEDULE = {
  SUBMITTED: 'SUBMITTED',
  MIDTHESIS: 'MIDTHESIS',
  FINALTHESIS: 'FINALTHESIS',
  CERTIFICATE: 'CERTIFICATE',
  APPROVED: 'APPROVED',
  OTHER: 'OTHER',
} as const;

const SUBMISSION_TYPE_LABEL: Record<SubmissionType, SubmissionTypeLabel> = {
  SUBMITTED: '\uC2E0\uCCAD\uC811\uC218',
  MIDTHESIS: '\uC911\uAC04\uBCF4\uACE0\uC11C',
  FINALTHESIS: '\uCD5C\uC885\uBCF4\uACE0\uC11C',
  CERTIFICATE: '\uC790\uACA9\uC99D',
  APPROVED: '\uCD5C\uC885 \uD1B5\uACFC',
  OTHER: '\uAE30\uD0C0\uC790\uACA9',
};

export const SUBMISSION_TYPE_OPTIONS = [
  { value: SCHEDULE.SUBMITTED, label: SUBMISSION_TYPE_LABEL.SUBMITTED },
  { value: SCHEDULE.MIDTHESIS, label: SUBMISSION_TYPE_LABEL.MIDTHESIS },
  { value: SCHEDULE.FINALTHESIS, label: SUBMISSION_TYPE_LABEL.FINALTHESIS },
  { value: SCHEDULE.CERTIFICATE, label: SUBMISSION_TYPE_LABEL.CERTIFICATE },
  { value: SCHEDULE.APPROVED, label: SUBMISSION_TYPE_LABEL.APPROVED },
  { value: SCHEDULE.OTHER, label: SUBMISSION_TYPE_LABEL.OTHER },
] as const;

export function getSubmissionTypeByIndex(
  index: number,
): SubmissionType | undefined {
  return SUBMISSION_TYPE_OPTIONS[index - 1]?.value;
}

export function getSubmissionTypeIndex(type: SubmissionType): number {
  const index = SUBMISSION_TYPE_OPTIONS.findIndex(
    option => option.value === type,
  );
  return index !== -1 ? index + 1 : 0;
}

export function getSubmissionTypeLabel(
  type: SubmissionType,
): SubmissionTypeLabel {
  return SUBMISSION_TYPE_LABEL[type] ?? SUBMISSION_TYPE_LABEL.OTHER;
}
