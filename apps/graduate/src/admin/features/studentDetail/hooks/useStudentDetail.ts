import { useQuery } from '@tanstack/react-query';

import { studentKeys } from '~/shared/queries/student';

import { getStudentDetail } from '../api';

export function useStudentDetail(studentId: number) {
  return useQuery({
    queryKey: studentKeys.detail(studentId),
    queryFn: async () => {
      const response = await getStudentDetail(studentId);
      return response.data;
    },
    enabled: !!studentId,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
