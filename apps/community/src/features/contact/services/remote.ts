import { MOCK_END_POINT } from '~/shared/constants/api';
import type { ContentsResponse } from '~/shared/types/api';
import { http } from '~/shared/utils/http';

interface Contact {
  title: string;
  description: string[];
}

function getContacts() {
  return http.get<ContentsResponse<Contact[]>>(MOCK_END_POINT.CONTACT);
}

export { type Contact, getContacts };
