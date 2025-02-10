import { END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface MyProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  major: string;
}

type MyProfileUpdate = Pick<MyProfile, 'phone' | 'email'>;

function getMyProfile() {
  return http.get<MyProfile>(END_POINT.MY_PROFILE);
}

function patchMyProfile(data: MyProfileUpdate) {
  return http.patch<MyProfileUpdate>(END_POINT.EDIT_MY_PROFILE, data);
}

export { type MyProfile, type MyProfileUpdate, getMyProfile, patchMyProfile };
