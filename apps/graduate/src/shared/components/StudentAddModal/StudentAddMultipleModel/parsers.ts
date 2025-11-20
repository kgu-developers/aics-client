import type {
  BulkUploadRow,
  InvalidRow,
  ParseResult,
  ProfessorNameToId,
} from '../types';
import { HEADER_NAMES } from './constants';
import { validateStudentRow } from './validator';

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
      studentNo: idx(HEADER_NAMES.studentNo, 0),
      name: idx(HEADER_NAMES.name, 1),
      advisor: idx(HEADER_NAMES.advisor, 2),
      capstone: idx(HEADER_NAMES.capstone, 3),
      grad: idx(HEADER_NAMES.graduation, 4),
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

  const valid: BulkUploadRow[] = [];
  const invalid: InvalidRow[] = [];
  const seenStudentNos = new Set<string>();

  for (let i = start; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < 2) continue;

    const result = validateStudentRow({
      key: i,
      rawStudentNo: (cols[indices.studentNo] || '').trim(),
      rawName: (cols[indices.name] || '').trim(),
      professorName: (cols[indices.advisor] || '').trim(),
      capstoneText: (cols[indices.capstone] || '').trim().toLowerCase(),
      grad: (cols[indices.grad] || '').trim(),
      dept: (cols[indices.dept] || '').trim(),
      professorNameToId,
      seenStudentNos,
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

    const valid: BulkUploadRow[] = [];
    const invalid: InvalidRow[] = [];
    const seenStudentNos = new Set<string>();

    for (let i = start; i < rowsArr.length; i++) {
      const row = rowsArr[i] || [];
      const getCell = (idx: number) => String((row as any)[idx] ?? '').trim();

      if (Object.values(indices).every(idx => !getCell(idx))) continue;

      const result = validateStudentRow({
        key: i,
        rawStudentNo: getCell(indices.studentNo),
        rawName: getCell(indices.name),
        professorName: getCell(indices.advisor),
        capstoneText: getCell(indices.capstone).toLowerCase(),
        grad: getCell(indices.grad),
        dept: getCell(indices.dept),
        professorNameToId,
        seenStudentNos,
      });

      if (result.valid) valid.push(result.row);
      else invalid.push(result.row);
    }

    return { valid, invalid };
  } catch {
    return { valid: [], invalid: [] };
  }
}
