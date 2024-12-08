import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface MyProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  major: string;
}

function getMyProfile() {
  return http.get<MyProfile>(MOCK_END_POINT.MY_PROFILE);
}

export { type MyProfile, getMyProfile };
