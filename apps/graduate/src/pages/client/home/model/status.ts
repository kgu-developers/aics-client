import type { GraduationStatus } from '~/shared/constants';

export type StatusText = {
  submissionType: GraduationStatus;
  content: string;
};
