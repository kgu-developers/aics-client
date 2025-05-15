import { END_POINT } from '~/shared/constants/api'
import { http } from '~/shared/utils/http'
import { isValidateToken } from '~/shared/utils/token'

interface MyProfile {
  id: string
  name: string
  phone: string
  email: string
  role: string
  major: string
}

type MyProfileUpdate = Pick<MyProfile, 'phone' | 'email'>

function getMyProfile() {
  if (!isValidateToken()) {
    throw new Error('Invalid token')
  }
  return http.get<MyProfile>(END_POINT.MY_PROFILE)
}

function patchMyProfile(data: MyProfileUpdate) {
  if (!isValidateToken()) {
    throw new Error('Invalid token')
  }
  return http.patch<MyProfileUpdate>(END_POINT.EDIT_MY_PROFILE, data)
}

export { type MyProfile, type MyProfileUpdate, getMyProfile, patchMyProfile }
