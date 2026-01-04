import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { getStudentDetail } from '../api';

export function useStudentDetail(studentId: number) {
  return useQuery({
    queryKey: [KEYS.STUDENT_DETAIL, studentId],
    queryFn: async () => {
      const response = await getStudentDetail(studentId);
      return response.data;
    },
    enabled: !!studentId,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
