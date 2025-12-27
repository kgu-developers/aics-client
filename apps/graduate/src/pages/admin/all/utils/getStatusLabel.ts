import {
  STATUS_UNKNOWN,
  STATUS_CERTIFICATE_NOT_SUBMITTED,
  STATUS_CERTIFICATE_SUBMITTED,
  STATUS_CERTIFICATE_APPROVED,
  STATUS_MID_REPORT_NOT_SUBMITTED,
  STATUS_MID_REPORT_SUBMITTED,
  STATUS_FINAL_REPORT_NOT_SUBMITTED,
  STATUS_FINAL_REPORT_SUBMITTED,
  STATUS_FINAL_REPORT_APPROVED,
} from '../constants/allManagementTexts';
import type { StudentStatus } from '../types/allManagement';

export function getStatusLabel(status: StudentStatus | undefined): string {
  switch (status?.type) {
    case 'CERTIFICATE':
      if (!status.certificate.submitted) {
        return STATUS_CERTIFICATE_NOT_SUBMITTED;
      }
      if (!status.certificate.approval) {
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
