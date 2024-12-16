import ClubService from './club-service';

const queryKeys = {
  all: ['clubs'] as const,
};

const clubQueryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => ClubService.getClubs(),
  }),
};

export { clubQueryOptions };
