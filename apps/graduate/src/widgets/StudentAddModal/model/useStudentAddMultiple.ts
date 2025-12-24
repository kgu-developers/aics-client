import { App } from 'antd';
import { createElement, useEffect, useState } from 'react';


import { fetchAdminUsers, fetchGraduationUsers } from '~/shared/api';
import { PROFESSORS } from '~/shared/constants/professors';

import { MULTIPLE_UPLOAD_TEXT } from './constants';
import { createProfessorMap, parseCsv, parseXlsx } from './parsers';
import type {
  InvalidRow,
  UploadRow,
} from '../types/studentAddModal';

const PROFESSOR_NAME_TO_ID = createProfessorMap(PROFESSORS);
const USER_PAGE_SIZE = 200;
const GRADUATION_USERS_PAGE_SIZE = 200;
const USER_NOT_FOUND_REASON = MULTIPLE_UPLOAD_TEXT.userNotFound;
const GRADUATION_USER_DUPLICATED_REASON = MULTIPLE_UPLOAD_TEXT.duplicatedUser;

const filterUnknownUsers = async (rows: UploadRow[]) => {
  if (rows.length === 0) return { valid: [], invalid: [] };
  const targetIds = rows.map(row => row.studentId);
  const existingIds = await fetchExistingUserIds(targetIds);

  const valid: UploadRow[] = [];
  const invalid: InvalidRow[] = [];

  rows.forEach(row => {
    if (existingIds.has(row.studentId)) {
      valid.push(row);
      return;
    }
    invalid.push({
      studentId: row.studentId,
      name: row.name,
      reason: USER_NOT_FOUND_REASON,
    });
  });

  return { valid, invalid };
};

const filterDuplicateGraduationUsers = async (rows: UploadRow[]) => {
  if (rows.length === 0) return { valid: [], invalid: [] };
  const targetIds = rows.map(row => row.studentId);
  const existingIds = await fetchExistingGraduationUserIds(targetIds);

  const valid: UploadRow[] = [];
  const invalid: InvalidRow[] = [];

  rows.forEach(row => {
    if (!existingIds.has(row.studentId)) {
      valid.push(row);
      return;
    }
    invalid.push({
      studentId: row.studentId,
      name: row.name,
      reason: GRADUATION_USER_DUPLICATED_REASON,
    });
  });

  return { valid, invalid };
};

const fetchExistingUserIds = async (studentIds: string[]) => {
  const remaining = new Set(studentIds);
  const found = new Set<string>();
  let page = 0;

  while (remaining.size > 0) {
    const data = await fetchAdminUsers({ page, size: USER_PAGE_SIZE });
    data.contents.forEach(user => {
      if (remaining.has(user.id)) {
        found.add(user.id);
        remaining.delete(user.id);
      }
    });

    if (data.pageable.isEnd) {
      break;
    }
    page += 1;
  }

  return found;
};

const fetchExistingGraduationUserIds = async (studentIds: string[]) => {
  const remaining = new Set(studentIds);
  const found = new Set<string>();
  let page = 0;

  while (remaining.size > 0) {
    const data = await fetchGraduationUsers({
      page,
      size: GRADUATION_USERS_PAGE_SIZE,
    });
    data.contents.forEach(user => {
      if (remaining.has(user.studentId)) {
        found.add(user.studentId);
        remaining.delete(user.studentId);
      }
    });

    if (data.pageable.isEnd) {
      break;
    }
    page += 1;
  }

  return found;
};

export const useStudentAddMultiple = (open: boolean) => {
  const { message, modal } = App.useApp();
  const [fileName, setFileName] = useState('');
  const [rows, setRows] = useState<UploadRow[]>([]);
  const [invalidRows, setInvalidRows] = useState<InvalidRow[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [current, setCurrent] = useState(1);

  const pageSize = 7;

  useEffect(() => {
    if (!open) return;
    setFileName('');
    setRows([]);
    setInvalidRows([]);
    setSelectedRowKeys([]);
    setCurrent(1);
  }, [open]);

  const handleFileChange = async (file: File) => {
    setFileName(file.name);
    const name = file.name.toLowerCase();

    let result: { valid: UploadRow[]; invalid: InvalidRow[] } = {
      valid: [],
      invalid: [],
    };

    if (name.endsWith('.csv')) {
      const text = await file.text();
      result = parseCsv(text, PROFESSOR_NAME_TO_ID);
    } else if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      result = await parseXlsx(file, PROFESSOR_NAME_TO_ID);
    } else {
      message.warning(MULTIPLE_UPLOAD_TEXT.unsupportedFile);
      setRows([]);
      setInvalidRows([]);
      return false;
    }

    let nextValid = result.valid;
    let nextInvalid = result.invalid;

    try {
      const { valid, invalid } = await filterUnknownUsers(nextValid);
      nextValid = valid;
      nextInvalid = [...nextInvalid, ...invalid];
    } catch {
      message.warning(MULTIPLE_UPLOAD_TEXT.fetchUsersFailed);
    }

    try {
      const { valid, invalid } =
        await filterDuplicateGraduationUsers(nextValid);
      nextValid = valid;
      nextInvalid = [...nextInvalid, ...invalid];
    } catch {
      message.warning(MULTIPLE_UPLOAD_TEXT.fetchDuplicateFailed);
    }

    setRows(nextValid);
    setInvalidRows(nextInvalid);
    setCurrent(1);
    setSelectedRowKeys([]);
    return false;
  };

  const handleResultAlert = (addedCount: number) => {
    const invalidMsg = invalidRows
      .map(r => `${r.name}[${r.studentId}] : ${r.reason}`)
      .join('\n');

    const invalidSection =
      invalidRows.length > 0
        ? `${MULTIPLE_UPLOAD_TEXT.resultInvalid(invalidRows.length)}:\n${invalidMsg}`
        : '';
    const content = [
      MULTIPLE_UPLOAD_TEXT.resultSuccess(addedCount),
      invalidSection,
    ]
      .filter(Boolean)
      .join('\n');

    modal.info({
      title: MULTIPLE_UPLOAD_TEXT.resultTitle,
      content: content
        .split('\n')
        .map((line, index) => createElement('div', { key: index }, line)),
    });
  };

  return {
    fileName,
    rows,
    invalidRows,
    selectedRowKeys,
    current,
    pageSize,
    setSelectedRowKeys,
    setCurrent,
    handleFileChange,
    handleResultAlert,
  };
};
