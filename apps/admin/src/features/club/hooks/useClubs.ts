import { useClubServiceGetApiV1Clubs } from '~/apis/community/queries'

export function useClubs() {
  const { data, ...rest } = useClubServiceGetApiV1Clubs()
  return { clubs: data?.contents ?? [], raw: data, ...rest }
}
