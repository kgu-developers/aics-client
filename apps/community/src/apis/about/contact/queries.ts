import ContactService from './service';

const queryKeys = {
  all: ['contacts'] as const,
};

const contactQueryOptions = {
  all: () => ({
    queryKey: queryKeys.all,
    queryFn: () => ContactService.getContacts(),
  }),
};

export { contactQueryOptions };
