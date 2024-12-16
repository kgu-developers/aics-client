import ProfessorService from './service';

const queryKeys = {
  all: ['contacts'] as const,
};

const professorQueryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => ProfessorService.getProfessors(),
  }),
};

export { professorQueryOptions };
