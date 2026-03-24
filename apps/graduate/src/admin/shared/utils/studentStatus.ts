import type { StudentStatus } from '~/admin/shared/types/studentDetail';

const STATUS_UNKNOWN = '미정';

const STATUS_CERTIFICATE_NOT_SUBMITTED = '자격증-미제출';
const STATUS_CERTIFICATE_SUBMITTED = '자격증-제출';
const STATUS_CERTIFICATE_APPROVED = '자격증-승인';

const STATUS_MID_REPORT_NOT_SUBMITTED = '중간보고서-미제출';
const STATUS_MID_REPORT_SUBMITTED = '중간보고서-제출';

const STATUS_FINAL_REPORT_NOT_SUBMITTED = '최종보고서-미제출';
const STATUS_FINAL_REPORT_SUBMITTED = '최종보고서-제출';
const STATUS_FINAL_REPORT_APPROVED = '최종보고서-승인';

export function getStatusLabel(status: StudentStatus | undefined): string {
  switch (status?.type) {
    case 'CERTIFICATE':
      if (!status.submitted) {
        return STATUS_CERTIFICATE_NOT_SUBMITTED;
      }
      if (!status.approval) {
        return STATUS_CERTIFICATE_SUBMITTED;
      }
      return STATUS_CERTIFICATE_APPROVED;

    case 'THESIS':
      if (!status.midThesis.submitted) {
        return STATUS_MID_REPORT_NOT_SUBMITTED;
      }
      if (!status.midThesis.approval) {
        return STATUS_MID_REPORT_SUBMITTED;
      }

      if (!status.finalThesis.submitted) {
        return STATUS_FINAL_REPORT_NOT_SUBMITTED;
      }
      if (!status.finalThesis.approval) {
        return STATUS_FINAL_REPORT_SUBMITTED;
      }

      return STATUS_FINAL_REPORT_APPROVED;

    default:
      return STATUS_UNKNOWN;
  }
}
