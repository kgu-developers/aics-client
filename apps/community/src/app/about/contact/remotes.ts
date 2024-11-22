import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface Contact {
  title: string;
  description: string[];
}

function getContacts() {
  return http.get<Contact[]>(MOCK_END_POINT.CONTACT);
}

export { type Contact, getContacts };
