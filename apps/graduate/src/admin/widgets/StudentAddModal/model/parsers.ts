import { HEADER_NAMES } from './constants';
import { validateStudentRow } from './validator';
import type {
  InvalidRow,
  ParseResult,
  ProfessorNameToId,
  UploadRow,
} from '../types/studentAddModal';

export function createProfessorMap(
  professors: { id: number; name: string }[],
): ProfessorNameToId {
  return professors.reduce<ProfessorNameToId>((acc, p) => {
    acc[p.name.trim()] = p.id;
    return acc;
  }, {});
}

const getHeaderIndices = (header: string[]) => {
  const hasHeader = header.some(h =>
    (Object.values(HEADER_NAMES) as string[]).includes(h),
  );

  const idx = (name: string, fallback: number) =>
    hasHeader
      ? Math.max(
          0,
          header.findIndex(h => h === name),
        )
      : fallback;

  return {
    start: hasHeader ? 1 : 0,
    indices: {
      studentId: idx(HEADER_NAMES.studentId, 0),
      name: idx(HEADER_NAMES.name, 1),
      advisorProfessor: idx(HEADER_NAMES.advisorProfessor, 2),
      capstone: idx(HEADER_NAMES.capstoneCompletion, 3),
      grad: idx(HEADER_NAMES.graduationDate, 4),
      dept: idx(HEADER_NAMES.department, 5),
    },
  };
};

export function parseCsv(
  text: string,
  professorNameToId: ProfessorNameToId,
): ParseResult {
  const rawLines = text.split(/\r?\n/);
  const lines = rawLines.filter(l => l.trim().length > 0);
  if (!lines.length) return { valid: [], invalid: [] };

  const header = lines[0].split(',').map(h => h.trim());
  const { start, indices } = getHeaderIndices(header);

  const valid: UploadRow[] = [];
  const invalid: InvalidRow[] = [];
  const seenStudentIds = new Set<string>();

  for (let i = start; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < 2) continue;

    const result = validateStudentRow({
      key: i,
      rawStudentId: (cols[indices.studentId] || '').trim(),
      rawName: (cols[indices.name] || '').trim(),
      professorName: (cols[indices.advisorProfessor] || '').trim(),
      capstoneText: (cols[indices.capstone] || '').trim().toLowerCase(),
      grad: (cols[indices.grad] || '').trim(),
      dept: (cols[indices.dept] || '').trim(),
      professorNameToId,
      seenStudentIds,
    });

    if (result.valid) valid.push(result.row);
    else invalid.push(result.row);
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
    const { start, indices } = getHeaderIndices(header);

    const valid: UploadRow[] = [];
    const invalid: InvalidRow[] = [];
    const seenStudentIds = new Set<string>();

    for (let i = start; i < rowsArr.length; i++) {
      const row = rowsArr[i] || [];
      const getCell = (idx: number) => {
        const val = (row as unknown[])[idx];
        return String(val ?? '').trim();
      };

      if (Object.values(indices).every(idx => !getCell(idx))) continue;

      const result = validateStudentRow({
        key: i,
        rawStudentId: getCell(indices.studentId),
        rawName: getCell(indices.name),
        professorName: getCell(indices.advisorProfessor),
        capstoneText: getCell(indices.capstone).toLowerCase(),
        grad: getCell(indices.grad),
        dept: getCell(indices.dept),
        professorNameToId,
        seenStudentIds,
      });

      if (result.valid) valid.push(result.row);
      else invalid.push(result.row);
    }

    return { valid, invalid };
  } catch {
    return { valid: [], invalid: [] };
  }
}
