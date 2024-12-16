import DeptService from './dept-service';

const queryKeys = {
  all: ['depts'] as const,
};

const deptQueryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => DeptService.getDepts(),
  }),
};

export { deptQueryOptions };
