import { MOCK_END_POINT } from '~/constants/api';
import type { Contact } from '~/types/contact';
import { http } from '~/utils/http';

class ContactService {
  getContacts() {
    return http.get<Contact[]>(MOCK_END_POINT.CONTACT);
  }
}

export default new ContactService();
