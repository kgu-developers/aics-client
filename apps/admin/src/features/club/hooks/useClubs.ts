import { useClubServiceGetApiV1Clubs } from '~/features/club/services'

export function useClubs() {
  const { data, ...rest } = useClubServiceGetApiV1Clubs()
  return { clubs: data?.contents ?? [], raw: data, ...rest }
}
