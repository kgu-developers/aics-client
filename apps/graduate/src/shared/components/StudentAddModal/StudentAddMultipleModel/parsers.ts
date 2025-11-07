import type {
  BulkUploadRow,
  CapstoneStatus,
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
): BulkUploadRow[] {
  const rawLines = text.split(/\r?\n/);
  const lines = rawLines.filter(l => l.trim().length > 0);
  if (!lines.length) return [];

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

  const out: BulkUploadRow[] = [];
  for (let li = start; li < lines.length; li++) {
    const cols = lines[li].split(',');
    if (cols.length < 2) continue;

    const rawStudentNo = (cols[iStudentNo] || '').trim();
    const rawName = (cols[iName] || '').trim();
    const professorName = (cols[iAdvisor] || '').trim();
    const capstoneText = (cols[iCapstone] || '').trim().toLowerCase();
    const grad = (cols[iGrad] || '').trim();
    const dept = (cols[iDept] || '').trim();

    if (!rawStudentNo || !rawName) continue;

    const advisorId = professorNameToId[professorName] ?? null;
    const capstoneStatus =
      CAPSTONE_MAP[capstoneText as keyof typeof CAPSTONE_MAP] ?? null;

    let graduationMonth: string | null = null;
    const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/);
    if (m) {
      const mm = (m[2] as string).padStart(2, '0');
      graduationMonth = `${m[1]}-${mm}`;
    }

    out.push({
      key: li,
      studentNo: rawStudentNo,
      name: rawName,
      advisorId,
      capstoneStatus,
      graduationMonth,
      department: dept || null,
    });
  }
  return out;
}

export async function parseXlsx(
  file: File,
  professorNameToId: ProfessorNameToId,
): Promise<BulkUploadRow[]> {
  try {
    const XLSX = await import('xlsx');
    const ab = await file.arrayBuffer();
    const wb = XLSX.read(ab, { type: 'array' });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rowsArr: unknown[][] = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
      header: 1,
      raw: true,
    });
    if (!rowsArr || rowsArr.length === 0) return [];

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

    const out: BulkUploadRow[] = [];
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

      if (!rawStudentNo || !rawName) continue;

      const advisorId = professorNameToId[professorName] ?? null;
      const capstoneStatus =
        CAPSTONE_MAP[capstoneText as keyof typeof CAPSTONE_MAP] ?? null;

      let graduationMonth: string | null = null;
      const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/);
      if (m) {
        const mm = (m[2] as string).padStart(2, '0');
        graduationMonth = `${m[1]}-${mm}`;
      }

      out.push({
        key: r,
        studentNo: rawStudentNo,
        name: rawName,
        advisorId,
        capstoneStatus,
        graduationMonth,
        department: dept || null,
      });
    }
    return out;
  } catch {
    return [];
  }
}
