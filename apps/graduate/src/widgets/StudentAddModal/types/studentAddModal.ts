import type { GraduationUserCreateRequest } from '~/shared/types';

export type { GraduationUserCreateRequest };

export const CAPSTONE_COMPLETION_OPTIONS = [
  { label: '이수', value: true },
  { label: '미이수', value: false },
] as const;

export type CapstoneCompletionOption =
  (typeof CAPSTONE_COMPLETION_OPTIONS)[number];

export type UploadRow = GraduationUserCreateRequest & { key: number };

export type InvalidRow = {
  studentId: string;
  name: string;
  reason: string;
};

export type ParseResult = {
  valid: UploadRow[];
  invalid: InvalidRow[];
};

export type ProfessorNameToId = Record<string, number>;
