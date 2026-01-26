import { FetchGraduationUsersParams } from '~/admin/entities/graduation-users/api';

export const userKeys = {
  all: ['user'] as const,
  graduation: () => [...userKeys.all, 'graduation'] as const,
  graduationStatus: () => [...userKeys.graduation(), 'status'] as const,
} as const;

export const graduationUsersKeys = {
  all: ['graduationUsers'] as const,
  lists: () => [...graduationUsersKeys.all, 'list'] as const,
  list: (params: FetchGraduationUsersParams) =>
    [...graduationUsersKeys.lists(), params] as const,
} as const;
