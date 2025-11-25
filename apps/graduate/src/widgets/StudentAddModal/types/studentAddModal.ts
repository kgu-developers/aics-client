export type CapstoneStatus = 'PASSED' | 'FAILED';
export type ProfessorNameToId = Record<string, number>;

export type SingleSubmitPayload = {
  studentNo: string;
  name: string;
  advisorId: number;
  capstoneStatus: CapstoneStatus;
  graduationMonth: string;
  department: string;
};

export type MultipleUploadRow = {
  key: number;
  studentNo: string;
  name: string;
  advisorId: number | null;
  capstoneStatus: CapstoneStatus | null;
  graduationMonth: string | null;
  department: string | null;
};

export type InvalidRow = {
  studentNo: string;
  name: string;
  reason: string;
};

export type ParseResult = {
  valid: MultipleUploadRow[];
  invalid: InvalidRow[];
};
