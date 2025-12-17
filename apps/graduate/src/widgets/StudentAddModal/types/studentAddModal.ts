export type GraduationUserCreateRequest = {
  studentId: string;
  name: string;
  advisorProfessor: string;
  capstoneCompletion: boolean;
  department: string;
  graduationDate: string;
};

export const CAPSTONE_COMPLETION_OPTIONS = [
  { label: '??', value: true },
  { label: '???', value: false },
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
