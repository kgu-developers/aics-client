import type {
  BulkUploadRow,
  CapstoneStatus,
  InvalidRow,
  ParseResult,
  ProfessorNameToId,
} from '../types';

export const CAPSTONE_MAP: Record<string, CapstoneStatus> = {
  이수: 'PASSED',
  미이수: 'FAILED',
  passed: 'PASSED',
  failed: 'FAILED',
};

export function createProfessorMap(
  professors: { id: number; name: string }[],
): ProfessorNameToId {
  return professors.reduce<ProfessorNameToId>((acc, p) => {
    acc[p.name.trim()] = p.id;
    return acc;
  }, {});
}

const HEADER_NAMES = {
  studentNo: '학번',
  name: '이름',
  advisor: '지도교수',
  capstone: '캡스톤이수여부',
  graduation: '졸업년도',
  department: '학과',
};

export function parseCsv(
  text: string,
  professorNameToId: ProfessorNameToId,
): ParseResult {
  const rawLines = text.split(/\r?\n/);
  const lines = rawLines.filter(l => l.trim().length > 0);
  if (!lines.length) return { valid: [], invalid: [] };

  const header = lines[0].split(',').map(h => h.trim());
  const hasHeader = header.some(h =>
    [
      HEADER_NAMES.studentNo,
      HEADER_NAMES.name,
      HEADER_NAMES.advisor,
      HEADER_NAMES.capstone,
      HEADER_NAMES.graduation,
      HEADER_NAMES.department,
    ].includes(h),
  );
  const start = hasHeader ? 1 : 0;

  const idx = (name: string, fallback: number) =>
    hasHeader
      ? Math.max(
          0,
          header.findIndex(h => h === name),
        )
      : fallback;

  const iStudentNo = idx(HEADER_NAMES.studentNo, 0);
  const iName = idx(HEADER_NAMES.name, 1);
  const iAdvisor = idx(HEADER_NAMES.advisor, 2);
  const iCapstone = idx(HEADER_NAMES.capstone, 3);
  const iGrad = idx(HEADER_NAMES.graduation, 4);
  const iDept = idx(HEADER_NAMES.department, 5);

  const valid: BulkUploadRow[] = [];
  const invalid: InvalidRow[] = [];
  const seenStudentNos = new Set<string>();

  for (let li = start; li < lines.length; li++) {
    const cols = lines[li].split(',');
    if (cols.length < 2) continue;

    const rawStudentNo = (cols[iStudentNo] || '').trim();
    const rawName = (cols[iName] || '').trim();
    const professorName = (cols[iAdvisor] || '').trim();
    const capstoneText = (cols[iCapstone] || '').trim().toLowerCase();
    const grad = (cols[iGrad] || '').trim();
    const dept = (cols[iDept] || '').trim();

    const missing: string[] = [];
    if (!rawStudentNo) missing.push('학번');
    if (!rawName) missing.push('이름');
    if (!professorName) missing.push('지도교수');
    if (!capstoneText) missing.push('캡스톤이수여부');
    if (!grad) missing.push('졸업년도');
    if (!dept) missing.push('학과');

    if (missing.length > 0) {
      invalid.push({
        studentNo: rawStudentNo || '-',
        name: rawName || '-',
        reason: `필수값 누락 (${missing.join(', ')})`,
      });
      continue;
    }

    if (!/^\d{9}$/.test(rawStudentNo)) {
      invalid.push({
        studentNo: rawStudentNo,
        name: rawName,
        reason: '학번 형식 오류 (9자리 숫자 아님)',
      });
      continue;
    }

    if (seenStudentNos.has(rawStudentNo)) {
      invalid.push({
        studentNo: rawStudentNo,
        name: rawName,
        reason: '파일 내 학번 중복',
      });
      continue;
    }
    seenStudentNos.add(rawStudentNo);

    const advisorId = professorNameToId[professorName] ?? null;
    if (advisorId === null) {
      invalid.push({
        studentNo: rawStudentNo,
        name: rawName,
        reason: `알 수 없는 지도교수 (${professorName})`,
      });
      continue;
    }

    const capstoneStatus =
      CAPSTONE_MAP[capstoneText as keyof typeof CAPSTONE_MAP] ?? null;
    if (capstoneStatus === null) {
      invalid.push({
        studentNo: rawStudentNo,
        name: rawName,
        reason: `캡스톤 상태 오류 (${capstoneText})`,
      });
      continue;
    }

    let graduationMonth: string | null = null;
    const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/);
    if (m) {
      const mm = (m[2] as string).padStart(2, '0');
      graduationMonth = `${m[1]}-${mm}`;
    } else {
      invalid.push({
        studentNo: rawStudentNo,
        name: rawName,
        reason: `졸업년도 형식 오류 (${grad})`,
      });
      continue;
    }

    valid.push({
      key: li,
      studentNo: rawStudentNo,
      name: rawName,
      advisorId,
      capstoneStatus,
      graduationMonth,
      department: dept,
    });
  }
  return { valid, invalid };
}

export async function parseXlsx(
  file: File,
  professorNameToId: ProfessorNameToId,
): Promise<ParseResult> {
  try {
    const XLSX = await import('xlsx');
    const ab = await file.arrayBuffer();
    const wb = XLSX.read(ab, { type: 'array' });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rowsArr: unknown[][] = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
      header: 1,
      raw: true,
    });
    if (!rowsArr || rowsArr.length === 0) return { valid: [], invalid: [] };

    const header = (rowsArr[0] || []).map((h: unknown) =>
      String(h ?? '').trim(),
    );
    const hasHeader = header.some((h: string) =>
      [
        HEADER_NAMES.studentNo,
        HEADER_NAMES.name,
        HEADER_NAMES.advisor,
        HEADER_NAMES.capstone,
        HEADER_NAMES.graduation,
        HEADER_NAMES.department,
      ].includes(h),
    );
    const start = hasHeader ? 1 : 0;

    const idx = (name: string, fallback: number) =>
      hasHeader
        ? Math.max(
            0,
            header.findIndex((h: string) => h === name),
          )
        : fallback;

    const iStudentNo = idx(HEADER_NAMES.studentNo, 0);
    const iName = idx(HEADER_NAMES.name, 1);
    const iAdvisor = idx(HEADER_NAMES.advisor, 2);
    const iCapstone = idx(HEADER_NAMES.capstone, 3);
    const iGrad = idx(HEADER_NAMES.graduation, 4);
    const iDept = idx(HEADER_NAMES.department, 5);

    const valid: BulkUploadRow[] = [];
    const invalid: InvalidRow[] = [];
    const seenStudentNos = new Set<string>();

    for (let r = start; r < rowsArr.length; r++) {
      const row = rowsArr[r] || [];
      const rawStudentNo = String(row[iStudentNo] ?? '').trim();
      const rawName = String(row[iName] ?? '').trim();
      const professorName = String(row[iAdvisor] ?? '').trim();
      const capstoneText = String(row[iCapstone] ?? '')
        .trim()
        .toLowerCase();
      const grad = String(row[iGrad] ?? '').trim();
      const dept = String(row[iDept] ?? '').trim();

      // 빈 행 스킵
      if (
        !rawStudentNo &&
        !rawName &&
        !professorName &&
        !capstoneText &&
        !grad &&
        !dept
      )
        continue;

      const missing: string[] = [];
      if (!rawStudentNo) missing.push('학번');
      if (!rawName) missing.push('이름');
      if (!professorName) missing.push('지도교수');
      if (!capstoneText) missing.push('캡스톤이수여부');
      if (!grad) missing.push('졸업년도');
      if (!dept) missing.push('학과');

      if (missing.length > 0) {
        invalid.push({
          studentNo: rawStudentNo || '-',
          name: rawName || '-',
          reason: `필수값 누락 (${missing.join(', ')})`,
        });
        continue;
      }

      if (!/^\d{9}$/.test(rawStudentNo)) {
        invalid.push({
          studentNo: rawStudentNo,
          name: rawName,
          reason: '학번 형식 오류 (9자리 숫자 아님)',
        });
        continue;
      }

      if (seenStudentNos.has(rawStudentNo)) {
        invalid.push({
          studentNo: rawStudentNo,
          name: rawName,
          reason: '파일 내 학번 중복',
        });
        continue;
      }
      seenStudentNos.add(rawStudentNo);

      const advisorId = professorNameToId[professorName] ?? null;
      if (advisorId === null) {
        invalid.push({
          studentNo: rawStudentNo,
          name: rawName,
          reason: `알 수 없는 지도교수 (${professorName})`,
        });
        continue;
      }

      const capstoneStatus =
        CAPSTONE_MAP[capstoneText as keyof typeof CAPSTONE_MAP] ?? null;
      if (capstoneStatus === null) {
        invalid.push({
          studentNo: rawStudentNo,
          name: rawName,
          reason: `캡스톤 상태 오류 (${capstoneText})`,
        });
        continue;
      }

      let graduationMonth: string | null = null;
      const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/);
      if (m) {
        const mm = (m[2] as string).padStart(2, '0');
        graduationMonth = `${m[1]}-${mm}`;
      } else {
        invalid.push({
          studentNo: rawStudentNo,
          name: rawName,
          reason: `졸업년도 형식 오류 (${grad})`,
        });
        continue;
      }

      valid.push({
        key: r,
        studentNo: rawStudentNo,
        name: rawName,
        advisorId,
        capstoneStatus,
        graduationMonth,
        department: dept,
      });
    }
    return { valid, invalid };
  } catch {
    return { valid: [], invalid: [] };
  }
}
