import { END_POINT } from '~/shared/constants/api'
import { http } from '~/shared/utils/http'

interface MyProfile {
  id: string
  name: string
  phone: string
  email: string
  role: string
  major: string
}

type MyProfileUpdate = Pick<MyProfile, 'phone' | 'email'>

interface MyPassword {
  originalPassword: string
  newPassword: string
}

function getMyProfile() {
  return http.get<MyProfile>(END_POINT.MY_PROFILE)
}

function patchMyProfile(data: MyProfileUpdate) {
  return http.patch<MyProfileUpdate>(END_POINT.EDIT_MY_PROFILE, data)
}

function patchChangePassword(data: {
  originalPassword: string
  newPassword: string
}) {
  return http.patch(END_POINT.CHANGE_PASSWORD, data)
}

export {
  type MyProfile,
  type MyProfileUpdate,
  type MyPassword,
  getMyProfile,
  patchMyProfile,
  patchChangePassword,
}
