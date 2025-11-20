import type { BulkUploadRow, InvalidRow, ProfessorNameToId } from '../types';
import { CAPSTONE_MAP } from './constants';

type ValidateOptions = {
  key: number;
  rawStudentNo: string;
  rawName: string;
  professorName: string;
  capstoneText: string;
  grad: string;
  dept: string;
  professorNameToId: ProfessorNameToId;
  seenStudentNos: Set<string>;
};

type ValidateResult =
  | { valid: true; row: BulkUploadRow }
  | { valid: false; row: InvalidRow };

export const validateStudentRow = ({
  key,
  rawStudentNo,
  rawName,
  professorName,
  capstoneText,
  grad,
  dept,
  professorNameToId,
  seenStudentNos,
}: ValidateOptions): ValidateResult => {
  const missing: string[] = [];
  if (!rawStudentNo) missing.push('학번');
  if (!rawName) missing.push('이름');
  if (!professorName) missing.push('지도교수');
  if (!capstoneText) missing.push('캡스톤이수여부');
  if (!grad) missing.push('졸업년도');
  if (!dept) missing.push('학과');

  if (missing.length > 0) {
    return {
      valid: false,
      row: {
        studentNo: rawStudentNo || '-',
        name: rawName || '-',
        reason: `필수값 누락 (${missing.join(', ')})`,
      },
    };
  }

  if (!/^\d{9}$/.test(rawStudentNo)) {
    return {
      valid: false,
      row: {
        studentNo: rawStudentNo,
        name: rawName,
        reason: '학번 형식 오류 (9자리 숫자 아님)',
      },
    };
  }

  if (seenStudentNos.has(rawStudentNo)) {
    return {
      valid: false,
      row: {
        studentNo: rawStudentNo,
        name: rawName,
        reason: '파일 내 학번 중복',
      },
    };
  }
  seenStudentNos.add(rawStudentNo);

  const advisorId = professorNameToId[professorName] ?? null;
  if (advisorId === null) {
    return {
      valid: false,
      row: {
        studentNo: rawStudentNo,
        name: rawName,
        reason: `알 수 없는 지도교수 (${professorName})`,
      },
    };
  }

  const capstoneStatus =
    CAPSTONE_MAP[capstoneText as keyof typeof CAPSTONE_MAP] ?? null;
  if (capstoneStatus === null) {
    return {
      valid: false,
      row: {
        studentNo: rawStudentNo,
        name: rawName,
        reason: `캡스톤 상태 오류 (${capstoneText})`,
      },
    };
  }
  
  let graduationMonth: string | null = null;
  const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/);
  if (m) {
    const mm = (m[2] as string).padStart(2, '0');
    graduationMonth = `${m[1]}-${mm}`;
  } else {
    return {
      valid: false,
      row: {
        studentNo: rawStudentNo,
        name: rawName,
        reason: `졸업년도 형식 오류 (${grad})`,
      },
    };
  }

  return {
    valid: true,
    row: {
      key,
      studentNo: rawStudentNo,
      name: rawName,
      advisorId,
      capstoneStatus,
      graduationMonth,
      department: dept,
    },
  };
};
