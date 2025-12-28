import type {
  InvalidRow,
  ProfessorNameToId,
  UploadRow,
} from '../types/studentAddModal';

type ValidateOptions = {
  key: number;
  rawStudentId: string;
  rawName: string;
  professorName: string;
  capstoneText: string;
  grad: string;
  dept: string;
  professorNameToId: ProfessorNameToId;
  seenStudentIds: Set<string>;
};

type ValidateResult =
  | { valid: true; row: UploadRow }
  | { valid: false; row: InvalidRow };

const CAPSTONE_VALUE_MAP: Record<string, boolean> = {
  passed: true,
  failed: false,
  합격: true,
  불합격: false,
  이수: true,
  미이수: false,
};

export const validateStudentRow = ({
  key,
  rawStudentId,
  rawName,
  professorName,
  capstoneText,
  grad,
  dept,
  professorNameToId,
  seenStudentIds,
}: ValidateOptions): ValidateResult => {
  const missing: string[] = [];
  if (!rawStudentId) missing.push('studentId');
  if (!rawName) missing.push('name');
  if (!professorName) missing.push('advisorProfessor');
  if (!capstoneText) missing.push('capstoneCompletion');
  if (!grad) missing.push('graduationDate');
  if (!dept) missing.push('department');

  if (missing.length > 0) {
    return {
      valid: false,
      row: {
        studentId: rawStudentId || '-',
        name: rawName || '-',
        reason: `필수값 누락 (${missing.join(', ')})`,
      },
    };
  }

  if (!/^\d{9}$/.test(rawStudentId)) {
    return {
      valid: false,
      row: {
        studentId: rawStudentId,
        name: rawName,
        reason: '학번 형식 오류 (숫자 9자리)',
      },
    };
  }

  if (seenStudentIds.has(rawStudentId)) {
    return {
      valid: false,
      row: {
        studentId: rawStudentId,
        name: rawName,
        reason: '중복된 학번입니다.',
      },
    };
  }
  seenStudentIds.add(rawStudentId);

  const advisorId = professorNameToId[professorName] ?? null;
  if (advisorId === null) {
    return {
      valid: false,
      row: {
        studentId: rawStudentId,
        name: rawName,
        reason: `존재하지 않는 지도교수(${professorName})`,
      },
    };
  }

  const capstoneKey = capstoneText.trim().toLowerCase();
  const capstoneCompletion =
    CAPSTONE_VALUE_MAP[capstoneKey] ??
    CAPSTONE_VALUE_MAP[
      capstoneText.trim() as keyof typeof CAPSTONE_VALUE_MAP
    ] ??
    null;

  if (capstoneCompletion === null) {
    return {
      valid: false,
      row: {
        studentId: rawStudentId,
        name: rawName,
        reason: `캡스톤 상태 오류 (${capstoneText})`,
      },
    };
  }

  const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/);
  if (!m) {
    return {
      valid: false,
      row: {
        studentId: rawStudentId,
        name: rawName,
        reason: `졸업 예정일 형식 오류 (${grad})`,
      },
    };
  }
  const mm = (m[2] as string).padStart(2, '0');
  const graduationDate = `${m[1]}-${mm}`;

  return {
    valid: true,
    row: {
      key,
      studentId: rawStudentId,
      name: rawName,
      advisorProfessor: professorName,
      capstoneCompletion,
      department: dept,
      graduationDate,
    },
  };
};
