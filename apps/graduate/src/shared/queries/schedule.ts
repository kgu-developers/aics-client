import type { SubmissionType } from '~/shared/types';

export const scheduleKeys = {
  all: ['schedule'] as const,
  lists: () => [...scheduleKeys.all, 'list'] as const,
  list: () => [...scheduleKeys.lists()] as const,
  allSchedules: () => [...scheduleKeys.all, 'all'] as const,
  details: () => [...scheduleKeys.all, 'detail'] as const,
  detail: (id: number) => [...scheduleKeys.details(), id] as const,
  contents: () => [...scheduleKeys.all, 'content'] as const,
  content: (submissionType: SubmissionType) =>
    [...scheduleKeys.contents(), submissionType] as const,
  statusTexts: () => [...scheduleKeys.all, 'status', 'text'] as const,
} as const;
