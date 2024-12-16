import LabService from './lab-service';

const queryKeys = {
  all: ['labs'] as const,
};

const labsQueryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => LabService.getLabs(),
  }),
};

export { labsQueryOptions };
