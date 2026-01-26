type FileType = 'certificate' | 'thesis';

export const studentKeys = {
  all: ['student'] as const,
  details: () => [...studentKeys.all, 'detail'] as const,
  detail: (id: number) => [...studentKeys.details(), id] as const,
  files: () => [...studentKeys.all, 'file'] as const,
  file: (type: FileType | undefined, id: number) =>
    [...studentKeys.files(), type, id] as const,
} as const;
