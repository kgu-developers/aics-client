import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  major: string;
}

function getUser() {
  return http.get<User>(MOCK_END_POINT.USERS);
}

export { type User, getUser };
